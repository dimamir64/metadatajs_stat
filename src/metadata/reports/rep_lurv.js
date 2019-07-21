/**
 * ### Отчет _ЛУРВ_ (невизуальная часть)
 *
 * @module rep_cash_moving
 *
 * Created 07.11.2016
 */


export default function ($p) {

  $p.RepLurv = class RepLurv extends $p.RepLurv {

    // ресурсы по умолчанию
    // TODO: сделать признак в метаданных
    get resources() {
      return ['duration', 'amount'];
    }

    /**
     * пересчитывает данные в табличной части - запрос к серверу с фильтром по параметрам
     * @param scheme
     */
    prepare(scheme) {
      const {pouch} = $p.adapters;
      const {date_from, date_till, query} = scheme;
      const {data} = this;
      const query_options = {
        reduce: true,
        limit: 100000,
        group: true,
        group_level: 5,
        startkey: [date_from.getFullYear(), date_from.getMonth() + 1, date_from.getDate()],
        endkey: [date_till.getFullYear(), date_till.getMonth() + 1, date_till.getDate(), '\ufff0']
      };
      const default_query = 'lurv/lurv';


      // фильтр для отбрасывания лишних строк
      // eslint-disable-next-line
      function discard(key) {
        return false;
      }

      // если нужны только обороты, результат получаем "в лоб" - прямым запросом к couchdb
      return pouch.remote.doc.query(query || default_query, query_options)
        .then((res) => {
          if(res.rows) {
            res.rows.forEach(({key, value}) => {
              if(discard(key)) {
                return;
              }
              data.add({
                period: new Date(`${key[0].pad(4)}-${key[1].pad(2)}-${key[2].pad(2)}`),
                year: key[0].pad(4),
                month: key[1].pad(2),
                register: key[3],
                note: key[4],
                duration: value,
                amount: value * 4000,
              });
            });
            return res;
          }
        });
    }

    /**
     * Фильтр по отбору схемы + свёртка по измерениям + группировка по схеме
     */
    calculate() {
      const {data, scheme, _manager} = this;
      // eslint-disable-next-line
      const _columns = scheme.rx_columns({
        mode: 'ts',
        fields: _manager.metadata('data').fields,
        _obj: this
      });

      // чистим таблицу результата
      data.clear();
      if(!data._rows) {
        data._rows = [];
      }
      else {
        data._rows.length = 0;
      }

      return this.prepare(scheme)
        .then(() => {

          // фильтруем результат с учетом разыменования и видов сравнения
          scheme.filter(data, '', true);

          // группируем по схеме - сворачиваем результат и сохраняем его в ._rows
          scheme.group_by(data);

        });
    }

  };

}



