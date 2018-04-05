/* eslint-disable */
module.exports = function meta($p) {

$p.wsql.alasql('USE md; CREATE TABLE IF NOT EXISTS `ireg_log_view` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, `key` CHAR, `user` CHAR); CREATE TABLE IF NOT EXISTS `ireg_log` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, `date` INT, `sequence` INT, `class` CHAR, `note` CHAR, `obj` CHAR, `user` CHAR); CREATE TABLE IF NOT EXISTS `cat_formulas` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `formula` CHAR, `leading_formula` CHAR, `condition_formula` BOOLEAN, `definition` CHAR, `template` CHAR, `sorting_field` INT, `async` BOOLEAN, `disabled` BOOLEAN, `zone` INT, `predefined_name` CHAR, `parent` CHAR, `ts_params` JSON); CREATE TABLE IF NOT EXISTS `cat_users` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `individual_person` CHAR, `user_ib_uid` CHAR, `prefix` CHAR, `branch` CHAR, `push_only` BOOLEAN, `suffix` CHAR, `direct` BOOLEAN, `predefined_name` CHAR, `parent` CHAR, `ts_acl_objs` JSON); CREATE TABLE IF NOT EXISTS `cat_reg_numbers` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `password` CHAR, `creation_date` Date, `workplases` INT, `attempts` INT, `partner` CHAR, `acquisition_date` Date, `site_email` CHAR, `predefined_name` CHAR, `owner` CHAR, `ts_subscriptions` JSON); CREATE TABLE IF NOT EXISTS `cat_tasks` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `user` CHAR, `started` BOOLEAN, `partner` CHAR, `priority` INT, `finished` BOOLEAN, `duration` FLOAT, `predefined_name` CHAR, `parent` CHAR, `ts_execution` JSON); CREATE TABLE IF NOT EXISTS `cat_organizations` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `inn` CHAR, `imns_code` CHAR, `okpo` CHAR, `kpp` CHAR, `name_full` CHAR, `main_bank_account` CHAR, `prefix` CHAR, `certificate_date_issue` Date, `certificate_series_number` CHAR, `individual_legal` CHAR, `predefined_name` CHAR); CREATE TABLE IF NOT EXISTS `cat_partners` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `inn` CHAR, `okpo` CHAR, `note` CHAR, `kpp` CHAR, `name_full` CHAR, `primary_contact` CHAR, `main_bank_account` CHAR, `main_contract` CHAR, `buyer_main_manager` CHAR, `is_buyer` BOOLEAN, `is_supplier` BOOLEAN, `region` CHAR, `individual_legal` CHAR, `predefined_name` CHAR, `parent` CHAR); CREATE TABLE IF NOT EXISTS `cat_branches` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `suffix` CHAR, `direct` BOOLEAN, `use` BOOLEAN, `parent` CHAR, `ts_organizations` JSON, `ts_partners` JSON, `ts_divisions` JSON, `ts_price_types` JSON, `ts_keys` JSON, `ts_extra_fields` JSON); CREATE TABLE IF NOT EXISTS `cat_meta_ids` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `full_moniker` CHAR, `predefined_name` CHAR, `parent` CHAR); CREATE TABLE IF NOT EXISTS `cat_property_values` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `predefined_name` CHAR, `owner` CHAR); CREATE TABLE IF NOT EXISTS `cat_contracts` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `settlements_currency` CHAR, `mutual_settlements` CHAR, `check_days_without_pay` BOOLEAN, `allowable_debts_amount` FLOAT, `allowable_debts_days` INT, `note` CHAR, `check_debts_amount` BOOLEAN, `check_debts_days` BOOLEAN, `organization` CHAR, `prepayment_percent` FLOAT, `price_type` CHAR, `days_without_pay` INT, `contract_kind` CHAR, `date` Date, `number_doc` CHAR, `main_project` CHAR, `main_cash_flow_article` CHAR, `validity` Date, `predefined_name` CHAR, `owner` CHAR, `parent` CHAR); CREATE TABLE IF NOT EXISTS `cat_nom_kinds` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `nom_type` CHAR, `predefined_name` CHAR); CREATE TABLE IF NOT EXISTS `cat_contact_information_kinds` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `type` CHAR, `predefined_name` CHAR); CREATE TABLE IF NOT EXISTS `cat_currencies` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `name_full` CHAR, `parameters_russian_recipe` CHAR, `predefined_name` CHAR); CREATE TABLE IF NOT EXISTS `cat_scheme_settings` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `obj` CHAR, `user` CHAR, `order` INT, `query` CHAR, `date_from` Date, `date_till` Date, `standard_period` CHAR, `formula` CHAR, `output` CHAR, `tag` CHAR, `ts_fields` JSON, `ts_sorting` JSON, `ts_dimensions` JSON, `ts_resources` JSON, `ts_selection` JSON, `ts_params` JSON, `ts_composition` JSON, `ts_conditional_appearance` JSON); CREATE TABLE IF NOT EXISTS `cat_meta_fields` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN); CREATE TABLE IF NOT EXISTS `cat_meta_objs` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN); CREATE TABLE IF NOT EXISTS `cch_properties` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `destination` CHAR, `predefined_name` CHAR, `type` JSON); CREATE TABLE IF NOT EXISTS `cch_predefined_elmnts` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `value` CHAR, `definition` CHAR, `synonym` CHAR, `list` INT, `zone` INT, `predefined_name` CHAR, `parent` CHAR, `type` CHAR, `ts_elmnts` JSON); CREATE TABLE IF NOT EXISTS `cch_destinations` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `predefined_name` CHAR, `parent` CHAR, `type` CHAR); CREATE TABLE IF NOT EXISTS `enm_nom_types` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_contact_information_types` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_report_output` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_quick_access` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_standard_period` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_data_field_kinds` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_label_positions` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_comparison_types` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_sort_directions` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_accumulation_record_type` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); ', []);

$p.md.init({"enm":{"accumulation_record_type":[{"order":0,"name":"debit","synonym":"Приход"},{"order":1,"name":"credit","synonym":"Расход"}],"sort_directions":[{"order":0,"name":"asc","synonym":"По возрастанию","default":true},{"order":1,"name":"desc","synonym":"По убыванию"}],"comparison_types":[{"order":0,"name":"gt","synonym":"Больше"},{"order":1,"name":"gte","synonym":"Больше или равно"},{"order":2,"name":"lt","synonym":"Меньше"},{"order":3,"name":"lte","synonym":"Меньше или равно "},{"order":4,"name":"eq","synonym":"Равно","default":true},{"order":5,"name":"ne","synonym":"Не равно"},{"order":6,"name":"in","synonym":"В списке"},{"order":7,"name":"nin","synonym":"Не в списке"},{"order":8,"name":"lke","synonym":"Содержит "},{"order":9,"name":"nlk","synonym":"Не содержит"}],"label_positions":[{"order":0,"name":"inherit","synonym":"Наследовать","default":true},{"order":1,"name":"hide","synonym":"Скрыть"},{"order":2,"name":"left","synonym":"Лево"},{"order":3,"name":"right","synonym":"Право"},{"order":4,"name":"top","synonym":"Верх"},{"order":5,"name":"bottom","synonym":"Низ"}],"data_field_kinds":[{"order":0,"name":"field","synonym":"Поле ввода","default":true},{"order":1,"name":"input","synonym":"Простой текст"},{"order":2,"name":"text","synonym":"Многострочный текст"},{"order":3,"name":"label","synonym":"Поле надписи"},{"order":4,"name":"link","synonym":"Гиперссылка"},{"order":5,"name":"cascader","synonym":"Каскадер"},{"order":6,"name":"toggle","synonym":"Переключатель"},{"order":7,"name":"image","synonym":"Картинка"},{"order":8,"name":"type","synonym":"Тип значения"},{"order":9,"name":"path","synonym":"Путь к данным"},{"order":10,"name":"typed_field","synonym":"Поле связи по типу"}],"standard_period":[{"order":0,"name":"custom","synonym":"Произвольный","default":true},{"order":1,"name":"yesterday","synonym":"Вчера"},{"order":2,"name":"today","synonym":"Сегодня"},{"order":3,"name":"tomorrow","synonym":"Завтра"},{"order":4,"name":"last7days","synonym":"Последние 7 дней"},{"order":5,"name":"last30days","synonym":"Последние 30 дней"},{"order":6,"name":"last3Month","synonym":"Последние 3 месяца"},{"order":7,"name":"lastWeek","synonym":"Прошлая неделя"},{"order":8,"name":"lastTendays","synonym":"Прошлая декада"},{"order":9,"name":"lastMonth","synonym":"Прошлый месяц"},{"order":10,"name":"lastQuarter","synonym":"Прошлый квартал"},{"order":11,"name":"lastHalfYear","synonym":"Прошлое полугодие"},{"order":12,"name":"lastYear","synonym":"Прошлый год"},{"order":13,"name":"next7Days","synonym":"Следующие 7 дней"},{"order":14,"name":"nextTendays","synonym":"Следующая декада"},{"order":15,"name":"nextWeek","synonym":"Следующая неделя"},{"order":16,"name":"nextMonth","synonym":"Следующий месяц"},{"order":17,"name":"nextQuarter","synonym":"Следующий квартал"},{"order":18,"name":"nextHalfYear","synonym":"Следующее полугодие"},{"order":19,"name":"nextYear","synonym":"Следующий год"},{"order":20,"name":"tillEndOfThisYear","synonym":"До конца этого года"},{"order":21,"name":"tillEndOfThisQuarter","synonym":"До конца этого квартала"},{"order":22,"name":"tillEndOfThisMonth","synonym":"До конца этого месяца"},{"order":23,"name":"tillEndOfThisHalfYear","synonym":"До конца этого полугодия"},{"order":24,"name":"tillEndOfThistendays","synonym":"До конца этой декады"},{"order":25,"name":"tillEndOfThisweek","synonym":"До конца этой недели"},{"order":26,"name":"fromBeginningOfThisYear","synonym":"С начала этого года"},{"order":27,"name":"fromBeginningOfThisQuarter","synonym":"С начала этого квартала"},{"order":28,"name":"fromBeginningOfThisMonth","synonym":"С начала этого месяца"},{"order":29,"name":"fromBeginningOfThisHalfYear","synonym":"С начала этого полугодия"},{"order":30,"name":"fromBeginningOfThisTendays","synonym":"С начала этой декады"},{"order":31,"name":"fromBeginningOfThisWeek","synonym":"С начала этой недели"},{"order":32,"name":"thisTenDays","synonym":"Эта декада"},{"order":33,"name":"thisWeek","synonym":"Эта неделя"},{"order":34,"name":"thisHalfYear","synonym":"Это полугодие"},{"order":35,"name":"thisYear","synonym":"Этот год"},{"order":36,"name":"thisQuarter","synonym":"Этот квартал"},{"order":37,"name":"thisMonth","synonym":"Этот месяц"}],"quick_access":[{"order":0,"name":"none","synonym":"Нет","default":true},{"order":1,"name":"toolbar","synonym":"Панель инструментов"},{"order":2,"name":"drawer","synonym":"Панель формы"}],"report_output":[{"order":0,"name":"grid","synonym":"Таблица","default":true},{"order":1,"name":"chart","synonym":"Диаграмма"},{"order":2,"name":"pivot","synonym":"Cводная таблица"},{"order":3,"name":"html","synonym":"Документ HTML"}],"contact_information_types":[{"order":0,"name":"Адрес","synonym":"Адрес"},{"order":1,"name":"Телефон","synonym":"Телефон"},{"order":2,"name":"АдресЭлектроннойПочты","synonym":"E-Mail"},{"order":3,"name":"ВебСтраница","synonym":"Веб-страница"},{"order":4,"name":"Другое","synonym":"Другое"}],"nom_types":[{"order":0,"name":"Товар","synonym":"Товар"},{"order":1,"name":"Услуга","synonym":"Услуга"},{"order":2,"name":"Набор","synonym":"Набор-пакет"},{"order":3,"name":"Комплект","synonym":"Набор-комплект"}]},"ireg":{"log":{"name":"log","note":"","synonym":"Журнал событий","dimensions":{"date":{"synonym":"Дата","tooltip":"Время события","type":{"types":["number"],"digits":15,"fraction_figits":0}},"sequence":{"synonym":"Порядок","tooltip":"Порядок следования","type":{"types":["number"],"digits":6,"fraction_figits":0}}},"resources":{"class":{"synonym":"Класс","tooltip":"Класс события","type":{"types":["string"],"str_len":100}},"note":{"synonym":"Комментарий","multiline_mode":true,"tooltip":"Текст события","type":{"types":["string"],"str_len":0}},"obj":{"synonym":"Объект","multiline_mode":true,"tooltip":"Объект, к которому относится событие","type":{"types":["string"],"str_len":0}},"user":{"synonym":"Пользователь","tooltip":"Пользователь, в сеансе которого произошло событие","type":{"types":["string"],"str_len":100}}}},"log_view":{"name":"log_view","note":"","synonym":"Просмотр журнала событий","dimensions":{"key":{"synonym":"Ключ","tooltip":"Ключ события","type":{"types":["string"],"str_len":100}},"user":{"synonym":"Пользователь","tooltip":"Пользователь, отметивыший событие, как просмотренное","type":{"types":["string"],"str_len":100}}}}},"cat":{"meta_objs":{"fields":{}},"meta_fields":{"fields":{}},"scheme_settings":{"name":"scheme_settings","synonym":"Настройки отчетов и списков","input_by_string":["name"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":0,"fields":{"obj":{"synonym":"Объект","tooltip":"Имя класса метаданных","type":{"types":["string"],"str_len":250}},"user":{"synonym":"Пользователь","tooltip":"Если пусто - публичная настройка","type":{"types":["string"],"str_len":50}},"order":{"synonym":"Порядок","tooltip":"Порядок варианта","type":{"types":["number"],"digits":6,"fraction_figits":0}},"query":{"synonym":"Запрос","tooltip":"Индекс CouchDB или текст SQL","type":{"types":["string"],"str_len":0}},"date_from":{"synonym":"Начало периода","tooltip":"","type":{"types":["date"],"date_part":"date"}},"date_till":{"synonym":"Конец периода","tooltip":"","type":{"types":["date"],"date_part":"date"}},"standard_period":{"synonym":"Стандартный период","tooltip":"Использование стандартного периода","type":{"types":["enm.standard_period"],"is_ref":true}},"formula":{"synonym":"Формула","tooltip":"Формула инициализации","type":{"types":["cat.formulas"],"is_ref":true}},"output":{"synonym":"Вывод","tooltip":"Вывод результата","type":{"types":["enm.report_output"],"is_ref":true}},"tag":{"synonym":"Дополнительные свойства","type":{"types":["string"],"str_len":0}}},"tabular_sections":{"fields":{"name":"fields","synonym":"Доступные поля","tooltip":"Состав, порядок и ширина колонок","fields":{"parent":{"synonym":"Родитель","tooltip":"Для плоского списка, родитель пустой","type":{"types":["string"],"str_len":100}},"use":{"synonym":"Использование","tooltip":"","type":{"types":["boolean"]}},"field":{"synonym":"Поле","tooltip":"","type":{"types":["string"],"str_len":100}},"width":{"synonym":"Ширина","tooltip":"","type":{"types":["string"],"str_len":6}},"caption":{"synonym":"Заголовок","tooltip":"","type":{"types":["string"],"str_len":100}},"tooltip":{"synonym":"Подсказка","tooltip":"","type":{"types":["string"],"str_len":100}},"ctrl_type":{"synonym":"Тип","tooltip":"Тип элемента управления","type":{"types":["enm.data_field_kinds"],"is_ref":true}},"formatter":{"synonym":"Формат","tooltip":"Функция форматирования","type":{"types":["cat.formulas"],"is_ref":true}},"editor":{"synonym":"Редактор","tooltip":"Компонент редактирования","type":{"types":["cat.formulas"],"is_ref":true}}}},"sorting":{"name":"sorting","synonym":"Поля сортировки","tooltip":"","fields":{"parent":{"synonym":"Родитель","tooltip":"","type":{"types":["string"],"str_len":100}},"use":{"synonym":"Использование","tooltip":"","type":{"types":["boolean"]}},"field":{"synonym":"Поле","tooltip":"","type":{"types":["string"],"str_len":100}},"direction":{"synonym":"Направление","tooltip":"","type":{"types":["enm.sort_directions"],"is_ref":true}}}},"dimensions":{"name":"dimensions","synonym":"Поля группировки","tooltip":"","fields":{"parent":{"synonym":"Родитель","tooltip":"","type":{"types":["string"],"str_len":100}},"use":{"synonym":"Использование","tooltip":"","type":{"types":["boolean"]}},"field":{"synonym":"Поле","tooltip":"","type":{"types":["string"],"str_len":100}}}},"resources":{"name":"resources","synonym":"Ресурсы","tooltip":"","fields":{"parent":{"synonym":"Родитель","tooltip":"","type":{"types":["string"],"str_len":100}},"use":{"synonym":"Использование","tooltip":"","type":{"types":["boolean"]}},"field":{"synonym":"Поле","tooltip":"","type":{"types":["string"],"str_len":100}},"formula":{"synonym":"Формула","tooltip":"По умолчанию - сумма","type":{"types":["cat.formulas"],"is_ref":true}}}},"selection":{"name":"selection","synonym":"Отбор","tooltip":"","fields":{"parent":{"synonym":"Родитель","tooltip":"","type":{"types":["string"],"str_len":100}},"use":{"synonym":"Использование","tooltip":"","type":{"types":["boolean"]}},"left_value":{"synonym":"Левое значение","tooltip":"Путь к данным","type":{"types":["string"],"str_len":255}},"left_value_type":{"synonym":"Тип слева","tooltip":"Тип значения слева","default":"path","type":{"types":["string"],"str_len":100}},"comparison_type":{"synonym":"Вид сравнения","tooltip":"","type":{"types":["enm.comparison_types"],"is_ref":true}},"right_value":{"synonym":"Правое значение","tooltip":"","type":{"types":["string"],"str_len":100}},"right_value_type":{"synonym":"Тип справа","tooltip":"Тип значения справа","default":"path","type":{"types":["string"],"str_len":100}}}},"params":{"name":"params","synonym":"Параметры","tooltip":"","fields":{"param":{"synonym":"Параметр","tooltip":"","type":{"types":["string"],"str_len":100}},"value_type":{"synonym":"Тип","tooltip":"Тип значения","type":{"types":["string"],"str_len":100}},"value":{"synonym":"Значение","tooltip":"Может иметь примитивный или ссылочный тип или массив","type":{"types":["string","number"],"str_len":0,"digits":15,"fraction_figits":3,"date_part":"date"}},"quick_access":{"synonym":"Быстрый доступ","tooltip":"Размещать на нанели инструментов","type":{"types":["boolean"]}}}},"composition":{"name":"composition","synonym":"Структура","tooltip":"","fields":{"parent":{"synonym":"Родитель","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":10}},"use":{"synonym":"Использование","tooltip":"","type":{"types":["boolean"]}},"field":{"synonym":"Элемент","tooltip":"Элемент структуры отчета","type":{"types":["string"],"str_len":50}},"kind":{"synonym":"Вид раздела отчета","tooltip":"список, таблица, группировка строк, группировка колонок","type":{"types":["string"],"str_len":50}},"definition":{"synonym":"Описание","tooltip":"Описание раздела структуры","type":{"types":["string"],"str_len":50}}}},"conditional_appearance":{"name":"conditional_appearance","synonym":"Условное оформление","tooltip":"","fields":{}}},"cachable":"doc"},"currencies":{"name":"Валюты","splitted":false,"synonym":"Валюты","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["name","id"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":3,"fields":{"name_full":{"synonym":"Полное наименование","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":50}},"parameters_russian_recipe":{"synonym":"Параметры прописи на русском","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}}},"tabular_sections":{},"cachable":"ram"},"contact_information_kinds":{"name":"ВидыКонтактнойИнформации","splitted":false,"synonym":"Виды контактной информации","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["name"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"type":{"synonym":"Тип","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.contact_information_types"],"is_ref":true}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}}},"tabular_sections":{},"cachable":"ram"},"nom_kinds":{"name":"ВидыНоменклатуры","splitted":false,"synonym":"Виды номенклатуры","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["name","id"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"nom_type":{"synonym":"Тип номенклатуры","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.nom_types"],"is_ref":true}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}}},"tabular_sections":{},"cachable":"ram"},"contracts":{"name":"ДоговорыКонтрагентов","splitted":false,"synonym":"Договоры контрагентов","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["name","id"],"hierarchical":true,"has_owners":true,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"settlements_currency":{"synonym":"Валюта взаиморасчетов","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.currencies"],"is_ref":true}},"mutual_settlements":{"synonym":"Ведение взаиморасчетов","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.mutual_contract_settlements"],"is_ref":true}},"check_days_without_pay":{"synonym":"Держать резерв без оплаты ограниченное время","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"allowable_debts_amount":{"synonym":"Допустимая сумма дебиторской задолженности","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}},"allowable_debts_days":{"synonym":"Допустимое число дней дебиторской задолженности","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction_figits":0}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"check_debts_amount":{"synonym":"Контролировать сумму дебиторской задолженности","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"check_debts_days":{"synonym":"Контролировать число дней дебиторской задолженности","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"organization":{"synonym":"Организация","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.organizations"],"is_ref":true}},"prepayment_percent":{"synonym":"Процент предоплаты","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":5,"fraction_figits":2}},"price_type":{"synonym":"Тип цен","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.nom_prices_types"],"is_ref":true}},"days_without_pay":{"synonym":"Число дней резерва без оплаты","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction_figits":0}},"contract_kind":{"synonym":"Вид договора","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.contract_kinds"],"is_ref":true}},"date":{"synonym":"Дата","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}},"number_doc":{"synonym":"Номер","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":20}},"main_project":{"synonym":"Основной проект","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.ВидыРаспределенияПоПроектам"],"is_ref":true}},"main_cash_flow_article":{"synonym":"Основная статья движения денежных средств","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.cash_flow_articles"],"is_ref":true}},"validity":{"synonym":"Срок действия договора","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}},"owner":{"synonym":"","multiline_mode":false,"tooltip":"","mandatory":true,"type":{"types":["cat.partners"],"is_ref":true}},"parent":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["cat.contracts"],"is_ref":true}}},"tabular_sections":{},"cachable":"doc_ram"},"property_values":{"name":"ЗначенияСвойствОбъектов","splitted":false,"synonym":"Значения свойств объектов","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["name","id"],"hierarchical":false,"has_owners":true,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}},"owner":{"synonym":"","multiline_mode":false,"tooltip":"","mandatory":true,"type":{"types":["cch.properties"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram"},"meta_ids":{"name":"ИдентификаторыОбъектовМетаданных","splitted":false,"synonym":"Идентификаторы объектов метаданных","illustration":"Идентификаторы объектов метаданных для использования в базе данных.","obj_presentation":"Идентификатор объекта метаданных","list_presentation":"","input_by_string":["name"],"hierarchical":true,"has_owners":false,"group_hierarchy":false,"main_presentation_name":true,"code_length":0,"fields":{"full_moniker":{"synonym":"Полное имя","multiline_mode":false,"tooltip":"Полное имя объекта метаданных,\nнапример, \"ПланВидовХарактеристик.ОбъектыАдресацииЗадач\"","type":{"types":["string"],"str_len":430}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}},"parent":{"synonym":"","multiline_mode":false,"tooltip":"Группа объектов метаданных.","type":{"types":["cat.meta_ids"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram"},"branches":{"name":"ИнтеграцияОтделыАбонентов","splitted":false,"synonym":"Отделы абонентов","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["name"],"hierarchical":true,"has_owners":true,"group_hierarchy":false,"main_presentation_name":true,"code_length":0,"fields":{"suffix":{"synonym":"Суффикс CouchDB","multiline_mode":false,"tooltip":"Для разделения данных в CouchDB","mandatory":true,"type":{"types":["string"],"str_len":4}},"direct":{"synonym":"Direct","multiline_mode":false,"tooltip":"Для пользователя запрещен режим offline","type":{"types":["boolean"]}},"use":{"synonym":"Используется","multiline_mode":false,"tooltip":"Использовать данный отдел при создании баз и пользователей","type":{"types":["boolean"]}},"parent":{"synonym":"Ведущий отдел","multiline_mode":false,"tooltip":"Заполняется в случае иерархической репликации","choice_links":[{"name":["selection","owner"],"path":["owner"]}],"type":{"types":["cat.branches"],"is_ref":true}}},"tabular_sections":{"organizations":{"name":"Организации","synonym":"Организации","tooltip":"Организации, у которых дилер может заказывать продукцию и услуги","fields":{"acl_obj":{"synonym":"Объект доступа","multiline_mode":false,"tooltip":"","type":{"types":["cat.organizations"],"is_ref":true}},"by_default":{"synonym":"По умолчанию","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}}}},"partners":{"name":"Контрагенты","synonym":"Контрагенты","tooltip":"Юридические лица дилера, от имени которых он оформляет заказы","fields":{"acl_obj":{"synonym":"Объект доступа","multiline_mode":false,"tooltip":"","type":{"types":["cat.partners"],"is_ref":true}},"by_default":{"synonym":"По умолчанию","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}}}},"divisions":{"name":"Подразделения","synonym":"Подразделения","tooltip":"Подразделения, к данным которых, дилеру предоставлен доступ","fields":{"acl_obj":{"synonym":"Объект доступа","multiline_mode":false,"tooltip":"","type":{"types":["cat.divisions"],"is_ref":true}},"by_default":{"synonym":"По умолчанию","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}}}},"price_types":{"name":"ТипыЦен","synonym":"Типы цен","tooltip":"Типы цен, привязанные к дилеру","fields":{"acl_obj":{"synonym":"Объект доступа","multiline_mode":false,"tooltip":"","type":{"types":["cat.nom_prices_types"],"is_ref":true}}}},"keys":{"name":"Ключи","synonym":"Ключи","tooltip":"Ключи параметров, привязанные к дилеру","fields":{"acl_obj":{"synonym":"Объект доступа","multiline_mode":false,"tooltip":"","type":{"types":["cat.parameters_keys"],"is_ref":true}}}},"extra_fields":{"name":"ДополнительныеРеквизиты","synonym":"Дополнительные реквизиты","tooltip":"Дополнительные реквизиты объекта","fields":{"property":{"synonym":"Свойство","multiline_mode":false,"tooltip":"Дополнительный реквизит","choice_groups_elm":"elm","type":{"types":["cch.properties"],"is_ref":true}},"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"Значение дополнительного реквизита","choice_links":[{"name":["selection","owner"],"path":["extra_fields","property"]}],"choice_groups_elm":"elm","type":{"types":["cat.organizations","cat.users","cch.properties","cat.partners","boolean","cat.currencies","string","date","number","cat.property_values"],"is_ref":true,"str_len":50,"date_part":"date_time","digits":15,"fraction_figits":3}},"txt_row":{"synonym":"Текстовая строка","multiline_mode":false,"tooltip":"Полный текст строкового дополнительного реквизита","type":{"types":["string"],"str_len":0}}}}},"cachable":"doc"},"partners":{"name":"Контрагенты","splitted":false,"synonym":"Контрагенты","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["name","id","inn"],"hierarchical":true,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"inn":{"synonym":"ИНН","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":12}},"okpo":{"synonym":"Код по ОКПО","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":10}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"kpp":{"synonym":"КПП","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":9}},"name_full":{"synonym":"Полное наименование","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"primary_contact":{"synonym":"Основное контактное лицо","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.contact_persons_partners"],"is_ref":true}},"main_bank_account":{"synonym":"Основной банковский счет","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.bank_accounts"],"is_ref":true}},"main_contract":{"synonym":"Основной договор контрагента","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.contracts"],"is_ref":true}},"buyer_main_manager":{"synonym":"Основной менеджер покупателя","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.users"],"is_ref":true}},"is_buyer":{"synonym":"Покупатель","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"is_supplier":{"synonym":"Поставщик","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"region":{"synonym":"Регион","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.Регионы"],"is_ref":true}},"individual_legal":{"synonym":"Юр. / физ. лицо","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.individual_legal"],"is_ref":true}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}},"parent":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["cat.partners"],"is_ref":true}}},"tabular_sections":{},"cachable":"doc_ram"},"organizations":{"name":"Организации","splitted":false,"synonym":"Организации","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["name","id"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"inn":{"synonym":"ИНН","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":12}},"imns_code":{"synonym":"Код ИФНС","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":4}},"okpo":{"synonym":"Код по ОКПО","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":10}},"kpp":{"synonym":"КПП","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":9}},"name_full":{"synonym":"Полное наименование","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"main_bank_account":{"synonym":"Основной банковский счет","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.bank_accounts"],"is_ref":true}},"prefix":{"synonym":"Префикс","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":3}},"certificate_date_issue":{"synonym":"Дата выдачи свидетельства о постановке на учет","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}},"certificate_series_number":{"synonym":"Серия и номер свидетельства о постановке на учет","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":25}},"individual_legal":{"synonym":"Юр. / физ. лицо","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.individual_legal"],"is_ref":true}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}}},"tabular_sections":{},"cachable":"ram"},"tasks":{"name":"пзЗадачи","splitted":false,"synonym":"УПзП: Задачи","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["name"],"hierarchical":true,"has_owners":false,"group_hierarchy":false,"main_presentation_name":true,"code_length":0,"fields":{"user":{"synonym":"Пользователь","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.users"],"is_ref":true}},"started":{"synonym":"Запущена","multiline_mode":false,"tooltip":"Запущена","type":{"types":["boolean"]}},"partner":{"synonym":"Контрагент","multiline_mode":false,"tooltip":"","choice_params":[{"name":"is_buyer","path":true}],"choice_groups_elm":"elm","type":{"types":["cat.partners"],"is_ref":true}},"priority":{"synonym":"Приоритет","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":2,"fraction_figits":0}},"finished":{"synonym":"Завершена","multiline_mode":false,"tooltip":"Завершена","type":{"types":["boolean"]}},"duration":{"synonym":"Длительность, час","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction_figits":2}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}},"parent":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["cat.tasks"],"is_ref":true}}},"tabular_sections":{"execution":{"name":"Исполнение","synonym":"Исполнение","tooltip":"","fields":{"start":{"synonym":"Старт","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date_time"}},"finish":{"synonym":"Финиш","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date_time"}},"duration":{"synonym":"Длительность, час","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction_figits":2}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"url":{"synonym":"Url задачи в github или flowcon","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"tags":{"synonym":"Теги json-строкой","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}}}}},"cachable":"doc"},"reg_numbers":{"name":"пзРегНомера","splitted":false,"synonym":"УПзП: Регистрационные номера","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["id"],"hierarchical":false,"has_owners":true,"group_hierarchy":true,"main_presentation_name":false,"code_length":10,"fields":{"password":{"synonym":"Пароль","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":10}},"creation_date":{"synonym":"Дата создания","multiline_mode":false,"tooltip":"","mandatory":true,"type":{"types":["date"],"date_part":"date_time"}},"workplases":{"synonym":"Пользователей","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":3,"fraction_figits":0}},"attempts":{"synonym":"Попыток","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":3,"fraction_figits":0}},"partner":{"synonym":"Контрагент","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.partners"],"is_ref":true}},"acquisition_date":{"synonym":"Дата приобретения","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date_time"}},"site_email":{"synonym":"Email на сайте","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":50}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}},"owner":{"synonym":"Номенклатура","multiline_mode":false,"tooltip":"","mandatory":true,"type":{"types":["cat.nom"],"is_ref":true}}},"tabular_sections":{"subscriptions":{"name":"ПодпискиИТС","synonym":"Подписки ИТС","tooltip":"","fields":{"start_date":{"synonym":"Дата начала","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date_time"}},"expiration_date":{"synonym":"Дата окончания","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date_time"}}}}},"cachable":"doc"},"users":{"name":"Пользователи","splitted":false,"synonym":"Пользователи","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["name","id"],"hierarchical":true,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":50,"fields":{"individual_person":{"synonym":"Физ. лицо","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.individuals"],"is_ref":true}},"user_ib_uid":{"synonym":"Идентификатор пользователя ИБ","multiline_mode":false,"tooltip":"Уникальный идентификатор пользователя информационной базы, через который установлена связь элемента справочника с пользователем информационной базы.","choice_groups_elm":"elm","type":{"types":["string"],"str_len":36,"str_fix":true}},"prefix":{"synonym":"Префикс нумерации документов","multiline_mode":false,"tooltip":"Префикс номеров документов текущего пользователя","mandatory":true,"type":{"types":["string"],"str_len":2}},"branch":{"synonym":"Отдел","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.branches"],"is_ref":true}},"push_only":{"synonym":"Только push репликация","multiline_mode":false,"tooltip":"Для пользователя установлен режим push-only (изменения мигрируют в одну сторону - от пользователя на сервер)","type":{"types":["boolean"]}},"suffix":{"synonym":"Суффикс CouchDB","multiline_mode":false,"tooltip":"Для разделения данных в CouchDB","mandatory":true,"type":{"types":["string"],"str_len":4}},"direct":{"synonym":"Direct","multiline_mode":false,"tooltip":"Для пользователя запрещен режим offline","type":{"types":["boolean"]}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}},"parent":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["cat.users"],"is_ref":true}}},"tabular_sections":{"acl_objs":{"name":"ОбъектыДоступа","synonym":"Объекты доступа","tooltip":"","fields":{"acl_obj":{"synonym":"Объект доступа","multiline_mode":false,"tooltip":"","type":{"types":["cat.organizations","cat.users","cat.partners","cat.meta_ids"],"is_ref":true}},"type":{"synonym":"Тип","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":50}},"by_default":{"synonym":"По умолчанию","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}}}}},"cachable":"ram"},"formulas":{"name":"Формулы","splitted":false,"synonym":"Формулы","illustration":"Формулы пользователя, для выполнения при расчете спецификаций в справочниках Вставки, Соединения, Фурнитура и регистре Корректировки спецификации","obj_presentation":"Формула","list_presentation":"","input_by_string":["name"],"hierarchical":true,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":0,"fields":{"formula":{"synonym":"Формула","multiline_mode":false,"tooltip":"Текст функции на языке javascript","type":{"types":["string"],"str_len":0}},"leading_formula":{"synonym":"Ведущая формула","multiline_mode":false,"tooltip":"Если указано, выполняется код ведущей формулы с параметрами, заданными для текущей формулы","choice_params":[{"name":"leading_formula","path":"00000000-0000-0000-0000-000000000000"}],"choice_groups_elm":"elm","type":{"types":["cat.formulas"],"is_ref":true}},"condition_formula":{"synonym":"Это формула условия","multiline_mode":false,"tooltip":"Формула используется, как фильтр, а не как алгоритм расчета количества.\nЕсли возвращает не Истина, строка в спецификацию не добавляется","type":{"types":["boolean"]}},"definition":{"synonym":"Описание","multiline_mode":true,"tooltip":"Описание в формате html","type":{"types":["string"],"str_len":0}},"template":{"synonym":"Шаблон","multiline_mode":true,"tooltip":"html шаблон отчета","type":{"types":["string"],"str_len":0}},"sorting_field":{"synonym":"Порядок","multiline_mode":false,"tooltip":"Используется для упорядочивания (служебный)","type":{"types":["number"],"digits":6,"fraction_figits":0}},"async":{"synonym":"Асинхронный режим","multiline_mode":false,"tooltip":"Создавать асинхронную функцию","type":{"types":["boolean"]}},"disabled":{"synonym":"Отключена","multiline_mode":false,"tooltip":"Имеет смысл только для печатных форм и модификаторов","type":{"types":["boolean"]}},"zone":{"synonym":"Область","multiline_mode":false,"tooltip":"Разделитель (префикс) данных","type":{"types":["number"],"digits":6,"fraction_figits":0}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}},"parent":{"synonym":"Группа","multiline_mode":false,"tooltip":"Группа формул","type":{"types":["cat.formulas"],"is_ref":true}}},"tabular_sections":{"params":{"name":"Параметры","synonym":"Параметры","tooltip":"","fields":{"param":{"synonym":"Параметр","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cch.properties","string"],"is_ref":true,"str_len":50}},"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"","choice_links":[{"name":["param"],"path":["params","param"]}],"choice_type":{"path":["params","param"],"elm":0},"type":{"types":["cat.organizations","cat.users","cch.properties","cat.partners","boolean","cat.currencies","string","date","number","cat.property_values"],"is_ref":true,"str_len":50,"date_part":"date_time","digits":15,"fraction_figits":3}}}}},"cachable":"doc"}},"dp":{"scheme_settings":{"name":"scheme_settings","synonym":"Варианты настроек","fields":{"scheme":{"synonym":"Текущая настройка","tooltip":"Текущий вариант настроек","mandatory":true,"type":{"types":["cat.scheme_settings"],"is_ref":true}}}}},"doc":{},"areg":{},"rep":{"lurv":{"name":"lurv","splitted":false,"synonym":"ЛУРВ","illustration":"","obj_presentation":"","list_presentation":"","hierarchical":false,"has_owners":false,"group_hierarchy":false,"main_presentation_name":false,"code_length":0,"fields":{},"tabular_sections":{"data":{"name":"data","synonym":"Данные","tooltip":"","fields":{"period":{"synonym":"Период","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}},"year":{"synonym":"Год","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":4,"str_fix":true}},"month":{"synonym":"Месяц","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":2,"str_fix":true}},"register":{"synonym":"Регистратор","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.tasks"],"is_ref":true}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"duration":{"synonym":"Длительность, час","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction_figits":2}},"amount":{"synonym":"Сумма","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction_figits":2}}}}}}},"cch":{"destinations":{"name":"НазначенияСвойствКатегорийОбъектов","splitted":false,"synonym":"Назначения свойств категорий объектов","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["name","id"],"hierarchical":true,"has_owners":false,"group_hierarchy":false,"main_presentation_name":true,"code_length":9,"fields":{"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}},"parent":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["cch.destinations"],"is_ref":true}},"type":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["doc.ВозвратТоваровПоставщикуИзНТТ","cat.organizations","cat.contracts","cat.partners"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram"},"predefined_elmnts":{"name":"ПредопределенныеЭлементы","splitted":false,"synonym":"Константы и списки","illustration":"Хранит значения настроек и параметров подсистем","obj_presentation":"Значение настроек","list_presentation":"","input_by_string":["name","synonym"],"hierarchical":true,"has_owners":false,"group_hierarchy":false,"main_presentation_name":true,"code_length":0,"fields":{"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"","choice_type":{"path":["ТипЗначения"],"elm":0},"type":{"types":["cch.properties","cat.formulas","boolean","string","date","number"],"is_ref":true,"str_len":1024,"date_part":"date","digits":8,"fraction_figits":1}},"definition":{"synonym":"Описание","multiline_mode":true,"tooltip":"","type":{"types":["string"],"str_len":0}},"synonym":{"synonym":"Синоним","multiline_mode":false,"tooltip":"Синоним предопределенного элемента","mandatory":true,"type":{"types":["string"],"str_len":50}},"list":{"synonym":"Список","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":1,"fraction_figits":0}},"zone":{"synonym":"Область","multiline_mode":false,"tooltip":"Разделитель (префикс) данных","type":{"types":["number"],"digits":6,"fraction_figits":0}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}},"parent":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["cch.predefined_elmnts"],"is_ref":true}},"type":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["cch.properties","cat.formulas","boolean","string","date","number"],"is_ref":true,"str_len":1024,"date_part":"date","digits":8,"fraction_figits":1}}},"tabular_sections":{"elmnts":{"name":"Элементы","synonym":"Элементы","tooltip":"","fields":{"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"","choice_type":{"path":["ТипЗначения"],"elm":0},"type":{"types":["cch.properties","cat.formulas","boolean","string","date","number"],"is_ref":true,"str_len":1024,"date_part":"date","digits":8,"fraction_figits":1}},"elm":{"synonym":"Элемент","multiline_mode":false,"tooltip":"","type":{"types":["cch.properties","cat.formulas","boolean","string","date","number"],"is_ref":true,"str_len":1024,"date_part":"date","digits":8,"fraction_figits":1}}}}},"cachable":"doc"},"properties":{"name":"СвойстваОбъектов","splitted":false,"synonym":"Свойства объектов","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["name","id"],"hierarchical":false,"has_owners":false,"group_hierarchy":false,"main_presentation_name":true,"code_length":9,"fields":{"destination":{"synonym":"Назначение свойства","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cch.destinations"],"is_ref":true}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}},"type":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["cat.organizations","cat.users","cch.properties","cat.partners","boolean","cat.currencies","string","date","number","cat.property_values"],"is_ref":true,"str_len":50,"date_part":"date_time","digits":15,"fraction_figits":3}}},"tabular_sections":{},"cachable":"ram"}},"cacc":{},"bp":{},"tsk":{},"syns_1с":["EmailНаСайте","Автор","Активации","Артикул","БазоваяЕдиницаИзмерения","Банк","БанкДляРасчетов","Банки","БанковскиеСчета","БанковскийСчет","БизнесПроцесс","БИКБанка","БИКБанкаДляРасчетов","Булево","Валюта","ВалютаВзаиморасчетов","ВалютаДенежныхСредств","ВалютаДокумента","ВалютаЦены","Валюты","ВводПоСтроке","ВедениеВзаиморасчетов","ВедениеВзаиморасчетовПоДоговорам","ВедущаяЗадача","ВедущаяФормула","Ведущий","ВерсияДанных","Вес","Вид","ВидДоговора","Виден","ВидНоменклатуры","ВидОперации","ВидСравнения","ВидСчета","ВидыДоговоровКонтрагентов","ВидыКонтактнойИнформации","ВидыНоменклатуры","ВидыПолейФормы","Владелец","ВладелецДополнительныхЗначений","Владельцы","ВремяИзменения","ВремяНачала","ВремяОкончания","ВремяСобытия","Всего","ВходящееИсходящееСобытие","ВыборГруппИЭлементов","Выполнена","Высота","Год","Город","ГородБанка","ГородБанкаДляРасчетов","Готовность","ГрафикиРаботников","ГрафикРаботы","ДаНет","Данные","Дата","ДатаДоставки","ДатаИзменения","ДатаНачала","ДатаОкончания","ДатаПриобретения","ДатаРождения","ДатаСобытия","ДатаСоздания","ДебетКредит","Действие","ДержатьРезервБезОплатыОграниченноеВремя","ДлинаКода","ДлинаНомера","Длительность","ДниНедели","ДоговорКонтрагента","ДоговорыКонтрагентов","ДокументУдостоверяющийЛичность","ДополнительныеРеквизиты","ДополнительныеСведения","ДопустимаяСуммаЗадолженности","ДопустимоеЧислоДнейЗадолженности","Доступен","ЕдиницаИзмерения","ЕдиницаПоКлассификатору","ЕдиницаХраненияОстатков","ЕдиницыИзмерения","Завершена","Завершение","ЗависимостиДополнительныхРеквизитов","Заголовок","Заказ","ЗаказПокупателя","ЗаказПоставщику","Закрыт","Запасы","ЗаполнятьОбязательно","Запуск","Запущена","Значение","ЗначениеЗаполнения","Значения","ЗначенияПолей","ЗначенияПолейАдреса","ЗначенияСвойствОбъектов","ЗначенияСвойствОбъектовИерархия","Идентификатор","ИдентификаторПользователяИБ","ИдентификаторПользователяСервиса","ИдентификаторыОбъектовМетаданных","Иерархический","ИерархияГруппИЭлементов","Имя","ИмяПредопределенныхДанных","Инд","Индекс","ИндивидуальныйПредприниматель","ИНН","ИнтеграцияКешСсылок","ИнтеграцияОтделыАбонентов","ИнтеграцияПраваПользователей","ИнтеграцияСостоянияТранспорта","ИнтеграцияТипВыгрузки","ИнтеграцияТипКеширования","ИнтеграцияТипСвёртки","Исполнение","Исполнители","Исполнитель","Используется","Касса","Кассы","Категория","КлассификаторЕдиницИзмерения","Ключ","Ключи","КлючиПараметров","Код","КодАльфа2","КодАльфа3","КодИМНС","КодПоОКПО","Количество","Комментарий","КонецПериода","КонечныйОстаток","КонтактнаяИнформация","КонтактныеЛица","КонтактныеЛицаКонтрагентов","Контрагент","Контрагенты","КонтролироватьСуммуЗадолженности","КонтролироватьЧислоДнейЗадолженности","КорректировкаРегистров","КоррСчет","КоррСчетБанка","КоррСчетБанкаДляРасчетов","Коэффициент","КПП","Кратность","КратностьВзаиморасчетов","Курс","КурсВзаиморасчетов","КурсыВалют","Марка","Масса","Материалы","МеждународноеСокращение","Менеджер","МестоРождения","Месяц","МногострочныйРежим","Мощность","Набор","НазначениеСвойства","НазначенияСвойствКатегорийОбъектов","Наименование","НаименованиеБанка","НаименованиеПолное","НаименованиеСокращенное","НалогообложениеНДС","Направление","НаправленияСортировки","Наценка","НачалоПериода","НачальныйОстаток","Недействителен","Номенклатура","НоменклатурнаяГруппа","НоменклатурныеГруппы","Номер","НомерСтроки","НомерСчета","НомерТелефона","НомерТелефонаБезКодов","Область","Объект","ОбъектДоступа","ОбъектыДоступа","Объем","ОбязательноеЗаполнение","ОкруглятьВБольшуюСторону","ОкруглятьКоличество","Описание","Организации","Организация","ОсновнаяВалюта","ОсновнаяСтатьяДвиженияДенежныхСредств","ОсновноаяКасса","ОсновноеКонтактноеЛицо","ОсновноеПредставлениеИмя","ОсновнойБанковскийСчет","ОсновнойДоговорКонтрагента","ОсновнойМенеджерПокупателя","ОсновнойПроект","Отбор","Ответственный","Отдел","Отправитель","ОтражатьВБухгалтерскомУчете","ОтражатьВНалоговомУчете","Отступы","Параметр","Параметры","ПараметрыВыбора","ПараметрыОтбора","ПараметрыПрописиНаРусском","Пароль","Период","пзЗадачи","пзРегНомера","Планирование","ПлатежноеПоручениеВходящее","ПлатежноеПоручениеИсходящее","ПлатежныйКалендарь","Плотность","Площадь","Поворачивать","ПоДоговоруВЦелом","ПодпискиИТС","Подразделение","Подразделения","Подсказка","Подчиненый","ПоЗаказам","Покупатель","Пол","ПолноеИмя","ПолноеНаименование","ПоложенияЗаголовка","Получатель","ПолФизическихЛиц","Пользователей","Пользователи","Пользователь","ПометкаУдаления","Попыток","ПорогОкругления","Порядок","ПорядокОкругления","Поставщик","ПоступлениеТоваровУслуг","ПоСчетам","ПоУмолчанию","Пояснение","Предоплата","ПредопределенныеЭлементы","Предопределенный","Представление","ПредставлениеИдентификатора","ПредставлениеОбъекта","ПредставлениеСписка","Префикс","Принудительно","Приоритет","Приход","ПриходныйКассовыйОрдер","Проведен","Проект","Проекты","Процент","ПроцентАвтоматическихСкидок","ПроцентПредоплаты","ПроцентСкидкиНаценки","ПроцентСкидкиНаценкиВнутр","Прочее","Разделитель","Расход","РасходныйКассовыйОрдер","РасчетныйСчет","РасчетыСКонтрагентами","РасширенныйРежим","РасшифровкаПлатежа","РеализацияТоваровУслуг","Регион","Реквизит","РеквизитДопУпорядочивания","Реквизиты","Родитель","СвидетельствоДатаВыдачи","СвидетельствоКодОргана","СвидетельствоНаименованиеОргана","СвидетельствоСерияНомер","СВИФТБИК","СвойстваОбъектов","Свойство","Связи","СвязиПараметровВыбора","СвязьПоТипу","Сделка","Себестоимость","Синоним","Скидка","СкидкиНаценки","Склад","Склады","СКомиссионером","СКомитентом","Скрыть","Сложный","Служебный","Событие","Содержание","Соответствие","Состояние","СостояниеТранспорта","Сотрудник","Сотрудники","Спецификации","Спецификация","Список","СПокупателем","СпособУстановкиКурса","СпособыУстановкиКурсаВалюты","СПоставщиком","СрокДействия","Ссылка","СтавкаНДС","СтавкиНДС","СтандартныйПериод","Старт","СтатусМатериальныхЗатрат","СтатусыЗаказов","СтатьиДвиженияДенежныхСредств","СтатьиЗатрат","СтатьяДвиженияДенежныхСредств","СтатьяЗатрат","Стоимость","Страна","СтраныМира","СтраховойНомерПФР","Строка","СтруктурнаяЕдиница","Сумма","СуммаАвтоматическойСкидки","СуммаВзаиморасчетов","СуммаВключаетНДС","СуммаДокумента","СуммаНДС","СуммаСНаценкой","СуммаУпр","Суффикс","СчетУчета","ТаблицаРегистров","ТабличнаяЧасть","ТабличныеЧасти","ТекстКорреспондента","ТекстНазначения","ТекстоваяСтрока","Телефон","Телефоны","ТелефоныБанка","Тип","ТипДенежныхСредств","ТипНоменклатуры","ТипСчета","ТипЦен","ТипыДенежныхСредств","ТипыКонтактнойИнформации","ТипыНалогообложенияНДС","ТипыНоменклатуры","ТипыСобытий","ТипыСтруктурныхЕдиниц","ТипыСчетов","ТипыЦен","ТипыЦенНоменклатуры","Товары","ТочкаМаршрута","ТранспортныеСредства","Управленческий","Условие","Услуги","УстановкаЦенНоменклатуры","УчитыватьНДС","ФизическиеЛица","ФизЛицо","Финиш","Формула","ФормулаРасчетаКурса","ФормулаУсловия","Формулы","Характеристика","ХарактеристикаНоменклатуры","ХарактеристикиНоменклатуры","Цена","ЦенаВключаетНДС","ЦенаВнутр","ЦеноваяГруппа","ЦеновыеГруппы","ЦеныНоменклатуры","Число","ЧислоДнейРезерваБезОплаты","Шаблон","Шаг","Штуки","Экземпляр","Элемент","Элементы","ЭтоГруппа","ЭтоДополнительноеСведение","ЭтоНабор","ЭтоУслуга","ЮрЛицо","ЮрФизЛицо","Ячейка","Ячейки"],"syns_js":["site_email","author","activations","article","base_unit","bank","settlements_bank","banks_qualifier","bank_accounts","bank_account","buisness_process","bank_bic","settlements_bank_bic","boolean","currency","settlements_currency","funds_currency","doc_currency","price_currency","currencies","input_by_string","mutual_settlements","mutual_contract_settlements","leading_task","leading_formula","master","data_version","heft","kind","contract_kind","shown","nom_kind","transactions_kind","comparison_type","account_kind","contract_kinds","contact_information_kinds","nom_kinds","data_field_kinds","owner","extra_values_owner","owners","change_time","begin_time","end_time","event_time","altogether","inbound_outbound","choice_groups_elm","completed","height","year","city","bank_city","settlements_bank_city","readiness","workers_schedules","worker_schedule","yes_no","data","date","shipping_date","change_date","start_date","expiration_date","acquisition_date","birth_date","event_date","creation_date","debit_credit","action","check_days_without_pay","code_length","number_doc_len","duration","week_days","contract","contracts","identification_document","extra_fields","extra_properties","allowable_debts_amount","allowable_debts_days","available","unit","qualifier_unit","storage_unit","nom_units","finished","completion","extra_fields_dependencies","caption","invoice","buyers_order","purchase_order","closed","inventories","mandatory","launch","started","value","fill_value","values","values_fields","address_fields","property_values","property_values_hierarchy","identifier","user_ib_uid","user_fresh_uid","meta_ids","hierarchical","group_hierarchy","moniker","predefined_name","icounter","ind","individual_entrepreneur","inn","integration_links_cache","branches","users_acl","obj_delivery_states","unload_type","caching_type","reduce_type","execution","executors","executor","used","cashbox","cashboxes","category","units","key","keys","parameters_keys","id","alpha2","alpha3","imns_code","okpo","quantity","note","period_till","final_balance","contact_information","contact_persons","contact_persons_partners","partner","partners","check_debts_amount","check_debts_days","registers_correction","correspondent_account","bank_correspondent_account","settlements_bank_correspondent_account","coefficient","kpp","multiplicity","settlements_multiplicity","course","settlements_course","currency_courses","brand","weight","materials","international_short","manager","birth_place","month","multiline_mode","performance","set","destination","destinations","name","bank_name","name_full","name_short","vat","direction","sort_directions","extra_charge","period_from","initial_balance","invalid","nom","nom_group","nom_groups","number_doc","row","account_number","phone_number","phone_without_codes","area","obj","acl_obj","acl_objs","volume","mandatory_fields","rounding_in_a_big_way","rounding_quantity","definition","organizations","organization","main_currency","main_cash_flow_article","main_cashbox","primary_contact","main_presentation_name","main_bank_account","main_contract","buyer_main_manager","main_project","selection","responsible","branch","sender","accounting_reflect","tax_accounting_reflect","offsets","param","params","choice_params","selection_params","parameters_russian_recipe","password","period","tasks","reg_numbers","planning","debit_bank_order","credit_bank_order","calendar_payments","density","s","rotate","by_entire_contract","subscriptions","department","divisions","tooltip","has_owners","by_orders","is_buyer","sex","full_moniker","full_name","label_positions","recipient","gender","workplases","users","user","_deleted","attempts","rounding_threshold","sorting","rounding_order","is_supplier","purchase","by_invoices","by_default","illustration","prepayment","predefined_elmnts","predefined","presentation","identifier_presentation","obj_presentation","list_presentation","prefix","forcibly","priority","debit","debit_cash_order","posted","project","projects","rate","discount_percent_automatic","prepayment_percent","discount_percent","discount_percent_internal","others","delimiter","credit","credit_cash_order","current_account","invoice_payments","extended_mode","payment_details","selling","region","field","sorting_field","fields","parent","certificate_date_issue","certificate_authority_code","certificate_authority_name","certificate_series_number","swift","properties","property","links","choice_links","choice_type","trans","first_cost","synonym","discount","charges_discounts","warehouse","stores","with_commission_agent","with_committent","hide","difficult","ancillary","event","content","conformity","state","obj_delivery_state","employee","staff","specifications","specification","list","with_buyer","course_installation_method","course_installation_methods","with_supplier","validity","ref","vat_rate","vat_rates","standard_period","start","costs_material_feed","invoice_conditions","cash_flow_articles","cost_items","cash_flow_article","cost_item","cost","country","countries","pfr_number","string","organizational_unit","amount","discount_amount_automatic","amount_mutual","vat_included","doc_amount","vat_amount","amount_marged","amount_operation","suffix","account_accounting","registers_table","tabular_section","tabular_sections","correspondent_text","appointments_text","txt_row","phone","phone_numbers","bank_phone_numbers","type","cash_flow_type","nom_type","account_type","price_type","cash_flow_types","contact_information_types","vat_types","nom_types","event_types","structural_unit_types","account_types","price_types","nom_prices_types","goods","buisness_process_point","transport_means","managerial","condition","services","nom_prices_setup","vat_consider","individuals","individual_person","finish","formula","course_calc_formula","condition_formula","formulas","characteristic","nom_characteristic","characteristics","price","vat_price_included","price_internal","price_group","price_groups","nom_prices","number","days_without_pay","template","step","is_pieces","specimen","elm","elmnts","is_folder","is_extra_property","is_set","is_service","legal_person","individual_legal","cell","cells"]});

(function(){
  const {EnumManager,CatManager,DocManager,DataProcessorsManager,ChartOfCharacteristicManager,ChartOfAccountManager,
    InfoRegManager,AccumRegManager,BusinessProcessManager,TaskManager,CatObj, DocObj, TabularSectionRow, DataProcessorObj,
    RegisterRow, BusinessProcessObj, TaskObj} = $p.constructor.classes;
    
  const _define = Object.defineProperties;

$p.enm.create('accumulation_record_type');
$p.enm.create('sort_directions');
$p.enm.create('comparison_types');
$p.enm.create('label_positions');
$p.enm.create('data_field_kinds');
$p.enm.create('standard_period');
$p.enm.create('quick_access');
$p.enm.create('report_output');
$p.enm.create('contact_information_types');
$p.enm.create('nom_types');

/**
* ### План видов характеристик НазначенияСвойствКатегорийОбъектов
* Назначения свойств категорий объектов
* @class CchDestinations
* @extends CatObj
* @constructor 
*/
class CchDestinations extends CatObj{
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}
get type(){const {type} = this._obj; return typeof type === 'object' ? type : {types: []}}
        set type(v){this._obj.type = typeof v === 'object' ? v : {types: []}}
}
$p.CchDestinations = CchDestinations;
$p.cch.create('destinations');

/**
* ### План видов характеристик ПредопределенныеЭлементы
* Хранит значения настроек и параметров подсистем
* @class CchPredefined_elmnts
* @extends CatObj
* @constructor 
*/
class CchPredefined_elmnts extends CatObj{
get value(){return this._getter('value')}
set value(v){this._setter('value',v)}
get definition(){return this._getter('definition')}
set definition(v){this._setter('definition',v)}
get synonym(){return this._getter('synonym')}
set synonym(v){this._setter('synonym',v)}
get list(){return this._getter('list')}
set list(v){this._setter('list',v)}
get zone(){return this._getter('zone')}
set zone(v){this._setter('zone',v)}
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}
get type(){const {type} = this._obj; return typeof type === 'object' ? type : {types: []}}
        set type(v){this._obj.type = typeof v === 'object' ? v : {types: []}}
get elmnts(){return this._getter_ts('elmnts')}
set elmnts(v){this._setter_ts('elmnts',v)}
}
$p.CchPredefined_elmnts = CchPredefined_elmnts;
class CchPredefined_elmntsElmntsRow extends TabularSectionRow{
get value(){return this._getter('value')}
set value(v){this._setter('value',v)}
get elm(){return this._getter('elm')}
set elm(v){this._setter('elm',v)}
}
$p.CchPredefined_elmntsElmntsRow = CchPredefined_elmntsElmntsRow;
$p.cch.create('predefined_elmnts');

/**
* ### План видов характеристик СвойстваОбъектов
* Свойства объектов
* @class CchProperties
* @extends CatObj
* @constructor 
*/
class CchProperties extends CatObj{
get destination(){return this._getter('destination')}
set destination(v){this._setter('destination',v)}
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
get type(){const {type} = this._obj; return typeof type === 'object' ? type : {types: []}}
        set type(v){this._obj.type = typeof v === 'object' ? v : {types: []}}
}
$p.CchProperties = CchProperties;
$p.cch.create('properties');

/**
* ### Справочник Валюты
* Валюты
* @class CatCurrencies
* @extends CatObj
* @constructor 
*/
class CatCurrencies extends CatObj{
get name_full(){return this._getter('name_full')}
set name_full(v){this._setter('name_full',v)}
get parameters_russian_recipe(){return this._getter('parameters_russian_recipe')}
set parameters_russian_recipe(v){this._setter('parameters_russian_recipe',v)}
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
}
$p.CatCurrencies = CatCurrencies;
$p.cat.create('currencies');

/**
* ### Справочник ВидыКонтактнойИнформации
* Виды контактной информации
* @class CatContact_information_kinds
* @extends CatObj
* @constructor 
*/
class CatContact_information_kinds extends CatObj{
get type(){return this._getter('type')}
set type(v){this._setter('type',v)}
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
}
$p.CatContact_information_kinds = CatContact_information_kinds;
$p.cat.create('contact_information_kinds');

/**
* ### Справочник ВидыНоменклатуры
* Виды номенклатуры
* @class CatNom_kinds
* @extends CatObj
* @constructor 
*/
class CatNom_kinds extends CatObj{
get nom_type(){return this._getter('nom_type')}
set nom_type(v){this._setter('nom_type',v)}
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
}
$p.CatNom_kinds = CatNom_kinds;
$p.cat.create('nom_kinds');

/**
* ### Справочник ДоговорыКонтрагентов
* Договоры контрагентов
* @class CatContracts
* @extends CatObj
* @constructor 
*/
class CatContracts extends CatObj{
get settlements_currency(){return this._getter('settlements_currency')}
set settlements_currency(v){this._setter('settlements_currency',v)}
get mutual_settlements(){return this._getter('mutual_settlements')}
set mutual_settlements(v){this._setter('mutual_settlements',v)}
get check_days_without_pay(){return this._getter('check_days_without_pay')}
set check_days_without_pay(v){this._setter('check_days_without_pay',v)}
get allowable_debts_amount(){return this._getter('allowable_debts_amount')}
set allowable_debts_amount(v){this._setter('allowable_debts_amount',v)}
get allowable_debts_days(){return this._getter('allowable_debts_days')}
set allowable_debts_days(v){this._setter('allowable_debts_days',v)}
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
get check_debts_amount(){return this._getter('check_debts_amount')}
set check_debts_amount(v){this._setter('check_debts_amount',v)}
get check_debts_days(){return this._getter('check_debts_days')}
set check_debts_days(v){this._setter('check_debts_days',v)}
get organization(){return this._getter('organization')}
set organization(v){this._setter('organization',v)}
get prepayment_percent(){return this._getter('prepayment_percent')}
set prepayment_percent(v){this._setter('prepayment_percent',v)}
get price_type(){return this._getter('price_type')}
set price_type(v){this._setter('price_type',v)}
get days_without_pay(){return this._getter('days_without_pay')}
set days_without_pay(v){this._setter('days_without_pay',v)}
get contract_kind(){return this._getter('contract_kind')}
set contract_kind(v){this._setter('contract_kind',v)}
get date(){return this._getter('date')}
set date(v){this._setter('date',v)}
get number_doc(){return this._getter('number_doc')}
set number_doc(v){this._setter('number_doc',v)}
get main_project(){return this._getter('main_project')}
set main_project(v){this._setter('main_project',v)}
get main_cash_flow_article(){return this._getter('main_cash_flow_article')}
set main_cash_flow_article(v){this._setter('main_cash_flow_article',v)}
get validity(){return this._getter('validity')}
set validity(v){this._setter('validity',v)}
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
get owner(){return this._getter('owner')}
set owner(v){this._setter('owner',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}
}
$p.CatContracts = CatContracts;
$p.cat.create('contracts');

/**
* ### Справочник ЗначенияСвойствОбъектов
* Значения свойств объектов
* @class CatProperty_values
* @extends CatObj
* @constructor 
*/
class CatProperty_values extends CatObj{
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
get owner(){return this._getter('owner')}
set owner(v){this._setter('owner',v)}
}
$p.CatProperty_values = CatProperty_values;
$p.cat.create('property_values');

/**
* ### Справочник ИдентификаторыОбъектовМетаданных
* Идентификаторы объектов метаданных для использования в базе данных.
* @class CatMeta_ids
* @extends CatObj
* @constructor 
*/
class CatMeta_ids extends CatObj{
get full_moniker(){return this._getter('full_moniker')}
set full_moniker(v){this._setter('full_moniker',v)}
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}
}
$p.CatMeta_ids = CatMeta_ids;
$p.cat.create('meta_ids');

/**
* ### Справочник ИнтеграцияОтделыАбонентов
* Отделы абонентов
* @class CatBranches
* @extends CatObj
* @constructor 
*/
class CatBranches extends CatObj{
get suffix(){return this._getter('suffix')}
set suffix(v){this._setter('suffix',v)}
get direct(){return this._getter('direct')}
set direct(v){this._setter('direct',v)}
get use(){return this._getter('use')}
set use(v){this._setter('use',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}
get organizations(){return this._getter_ts('organizations')}
set organizations(v){this._setter_ts('organizations',v)}
get partners(){return this._getter_ts('partners')}
set partners(v){this._setter_ts('partners',v)}
get divisions(){return this._getter_ts('divisions')}
set divisions(v){this._setter_ts('divisions',v)}
get price_types(){return this._getter_ts('price_types')}
set price_types(v){this._setter_ts('price_types',v)}
get keys(){return this._getter_ts('keys')}
set keys(v){this._setter_ts('keys',v)}
get extra_fields(){return this._getter_ts('extra_fields')}
set extra_fields(v){this._setter_ts('extra_fields',v)}
}
$p.CatBranches = CatBranches;
class CatBranchesOrganizationsRow extends TabularSectionRow{
get acl_obj(){return this._getter('acl_obj')}
set acl_obj(v){this._setter('acl_obj',v)}
get by_default(){return this._getter('by_default')}
set by_default(v){this._setter('by_default',v)}
}
$p.CatBranchesOrganizationsRow = CatBranchesOrganizationsRow;
class CatBranchesPartnersRow extends TabularSectionRow{
get acl_obj(){return this._getter('acl_obj')}
set acl_obj(v){this._setter('acl_obj',v)}
get by_default(){return this._getter('by_default')}
set by_default(v){this._setter('by_default',v)}
}
$p.CatBranchesPartnersRow = CatBranchesPartnersRow;
class CatBranchesDivisionsRow extends TabularSectionRow{
get acl_obj(){return this._getter('acl_obj')}
set acl_obj(v){this._setter('acl_obj',v)}
get by_default(){return this._getter('by_default')}
set by_default(v){this._setter('by_default',v)}
}
$p.CatBranchesDivisionsRow = CatBranchesDivisionsRow;
class CatBranchesPrice_typesRow extends TabularSectionRow{
get acl_obj(){return this._getter('acl_obj')}
set acl_obj(v){this._setter('acl_obj',v)}
}
$p.CatBranchesPrice_typesRow = CatBranchesPrice_typesRow;
class CatBranchesKeysRow extends TabularSectionRow{
get acl_obj(){return this._getter('acl_obj')}
set acl_obj(v){this._setter('acl_obj',v)}
}
$p.CatBranchesKeysRow = CatBranchesKeysRow;
class CatBranchesExtra_fieldsRow extends TabularSectionRow{
get property(){return this._getter('property')}
set property(v){this._setter('property',v)}
get value(){return this._getter('value')}
set value(v){this._setter('value',v)}
get txt_row(){return this._getter('txt_row')}
set txt_row(v){this._setter('txt_row',v)}
}
$p.CatBranchesExtra_fieldsRow = CatBranchesExtra_fieldsRow;
$p.cat.create('branches');

/**
* ### Справочник Контрагенты
* Контрагенты
* @class CatPartners
* @extends CatObj
* @constructor 
*/
class CatPartners extends CatObj{
get inn(){return this._getter('inn')}
set inn(v){this._setter('inn',v)}
get okpo(){return this._getter('okpo')}
set okpo(v){this._setter('okpo',v)}
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
get kpp(){return this._getter('kpp')}
set kpp(v){this._setter('kpp',v)}
get name_full(){return this._getter('name_full')}
set name_full(v){this._setter('name_full',v)}
get primary_contact(){return this._getter('primary_contact')}
set primary_contact(v){this._setter('primary_contact',v)}
get main_bank_account(){return this._getter('main_bank_account')}
set main_bank_account(v){this._setter('main_bank_account',v)}
get main_contract(){return this._getter('main_contract')}
set main_contract(v){this._setter('main_contract',v)}
get buyer_main_manager(){return this._getter('buyer_main_manager')}
set buyer_main_manager(v){this._setter('buyer_main_manager',v)}
get is_buyer(){return this._getter('is_buyer')}
set is_buyer(v){this._setter('is_buyer',v)}
get is_supplier(){return this._getter('is_supplier')}
set is_supplier(v){this._setter('is_supplier',v)}
get region(){return this._getter('region')}
set region(v){this._setter('region',v)}
get individual_legal(){return this._getter('individual_legal')}
set individual_legal(v){this._setter('individual_legal',v)}
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}
}
$p.CatPartners = CatPartners;
$p.cat.create('partners');

/**
* ### Справочник Организации
* Организации
* @class CatOrganizations
* @extends CatObj
* @constructor 
*/
class CatOrganizations extends CatObj{
get inn(){return this._getter('inn')}
set inn(v){this._setter('inn',v)}
get imns_code(){return this._getter('imns_code')}
set imns_code(v){this._setter('imns_code',v)}
get okpo(){return this._getter('okpo')}
set okpo(v){this._setter('okpo',v)}
get kpp(){return this._getter('kpp')}
set kpp(v){this._setter('kpp',v)}
get name_full(){return this._getter('name_full')}
set name_full(v){this._setter('name_full',v)}
get main_bank_account(){return this._getter('main_bank_account')}
set main_bank_account(v){this._setter('main_bank_account',v)}
get prefix(){return this._getter('prefix')}
set prefix(v){this._setter('prefix',v)}
get certificate_date_issue(){return this._getter('certificate_date_issue')}
set certificate_date_issue(v){this._setter('certificate_date_issue',v)}
get certificate_series_number(){return this._getter('certificate_series_number')}
set certificate_series_number(v){this._setter('certificate_series_number',v)}
get individual_legal(){return this._getter('individual_legal')}
set individual_legal(v){this._setter('individual_legal',v)}
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
}
$p.CatOrganizations = CatOrganizations;
$p.cat.create('organizations');

/**
* ### Справочник пзЗадачи
* УПзП: Задачи
* @class CatTasks
* @extends CatObj
* @constructor 
*/
class CatTasks extends CatObj{
get user(){return this._getter('user')}
set user(v){this._setter('user',v)}
get started(){return this._getter('started')}
set started(v){this._setter('started',v)}
get partner(){return this._getter('partner')}
set partner(v){this._setter('partner',v)}
get priority(){return this._getter('priority')}
set priority(v){this._setter('priority',v)}
get finished(){return this._getter('finished')}
set finished(v){this._setter('finished',v)}
get duration(){return this._getter('duration')}
set duration(v){this._setter('duration',v)}
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}
get execution(){return this._getter_ts('execution')}
set execution(v){this._setter_ts('execution',v)}
}
$p.CatTasks = CatTasks;
class CatTasksExecutionRow extends TabularSectionRow{
get start(){return this._getter('start')}
set start(v){this._setter('start',v)}
get finish(){return this._getter('finish')}
set finish(v){this._setter('finish',v)}
get duration(){return this._getter('duration')}
set duration(v){this._setter('duration',v)}
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
get url(){return this._getter('url')}
set url(v){this._setter('url',v)}
get tags(){return this._getter('tags')}
set tags(v){this._setter('tags',v)}
}
$p.CatTasksExecutionRow = CatTasksExecutionRow;
$p.cat.create('tasks');

/**
* ### Справочник пзРегНомера
* УПзП: Регистрационные номера
* @class CatReg_numbers
* @extends CatObj
* @constructor 
*/
class CatReg_numbers extends CatObj{
get password(){return this._getter('password')}
set password(v){this._setter('password',v)}
get creation_date(){return this._getter('creation_date')}
set creation_date(v){this._setter('creation_date',v)}
get workplases(){return this._getter('workplases')}
set workplases(v){this._setter('workplases',v)}
get attempts(){return this._getter('attempts')}
set attempts(v){this._setter('attempts',v)}
get partner(){return this._getter('partner')}
set partner(v){this._setter('partner',v)}
get acquisition_date(){return this._getter('acquisition_date')}
set acquisition_date(v){this._setter('acquisition_date',v)}
get site_email(){return this._getter('site_email')}
set site_email(v){this._setter('site_email',v)}
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
get owner(){return this._getter('owner')}
set owner(v){this._setter('owner',v)}
get subscriptions(){return this._getter_ts('subscriptions')}
set subscriptions(v){this._setter_ts('subscriptions',v)}
}
$p.CatReg_numbers = CatReg_numbers;
class CatReg_numbersSubscriptionsRow extends TabularSectionRow{
get start_date(){return this._getter('start_date')}
set start_date(v){this._setter('start_date',v)}
get expiration_date(){return this._getter('expiration_date')}
set expiration_date(v){this._setter('expiration_date',v)}
}
$p.CatReg_numbersSubscriptionsRow = CatReg_numbersSubscriptionsRow;
$p.cat.create('reg_numbers');

/**
* ### Справочник Пользователи
* Пользователи
* @class CatUsers
* @extends CatObj
* @constructor 
*/
class CatUsers extends CatObj{
get individual_person(){return this._getter('individual_person')}
set individual_person(v){this._setter('individual_person',v)}
get user_ib_uid(){return this._getter('user_ib_uid')}
set user_ib_uid(v){this._setter('user_ib_uid',v)}
get prefix(){return this._getter('prefix')}
set prefix(v){this._setter('prefix',v)}
get branch(){return this._getter('branch')}
set branch(v){this._setter('branch',v)}
get push_only(){return this._getter('push_only')}
set push_only(v){this._setter('push_only',v)}
get suffix(){return this._getter('suffix')}
set suffix(v){this._setter('suffix',v)}
get direct(){return this._getter('direct')}
set direct(v){this._setter('direct',v)}
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}
get acl_objs(){return this._getter_ts('acl_objs')}
set acl_objs(v){this._setter_ts('acl_objs',v)}
}
$p.CatUsers = CatUsers;
class CatUsersAcl_objsRow extends TabularSectionRow{
get acl_obj(){return this._getter('acl_obj')}
set acl_obj(v){this._setter('acl_obj',v)}
get type(){return this._getter('type')}
set type(v){this._setter('type',v)}
get by_default(){return this._getter('by_default')}
set by_default(v){this._setter('by_default',v)}
}
$p.CatUsersAcl_objsRow = CatUsersAcl_objsRow;
$p.cat.create('users');

/**
* ### Справочник Формулы
* Формулы пользователя, для выполнения при расчете спецификаций в справочниках Вставки, Соединения, Фурнитура и регистре Корректировки спецификации
* @class CatFormulas
* @extends CatObj
* @constructor 
*/
class CatFormulas extends CatObj{
get formula(){return this._getter('formula')}
set formula(v){this._setter('formula',v)}
get leading_formula(){return this._getter('leading_formula')}
set leading_formula(v){this._setter('leading_formula',v)}
get condition_formula(){return this._getter('condition_formula')}
set condition_formula(v){this._setter('condition_formula',v)}
get definition(){return this._getter('definition')}
set definition(v){this._setter('definition',v)}
get template(){return this._getter('template')}
set template(v){this._setter('template',v)}
get sorting_field(){return this._getter('sorting_field')}
set sorting_field(v){this._setter('sorting_field',v)}
get async(){return this._getter('async')}
set async(v){this._setter('async',v)}
get disabled(){return this._getter('disabled')}
set disabled(v){this._setter('disabled',v)}
get zone(){return this._getter('zone')}
set zone(v){this._setter('zone',v)}
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}
get params(){return this._getter_ts('params')}
set params(v){this._setter_ts('params',v)}
}
$p.CatFormulas = CatFormulas;
class CatFormulasParamsRow extends TabularSectionRow{
get param(){return this._getter('param')}
set param(v){this._setter('param',v)}
get value(){return this._getter('value')}
set value(v){this._setter('value',v)}
}
$p.CatFormulasParamsRow = CatFormulasParamsRow;
$p.cat.create('formulas');

/**
* ### Регистр сведений log_view
* Просмотр журнала событий
* @class IregLog_view
* @extends RegisterRow
* @constructor 
*/
class IregLog_view extends RegisterRow{
get key(){return this._getter('key')}
set key(v){this._setter('key',v)}
get user(){return this._getter('user')}
set user(v){this._setter('user',v)}
}
$p.IregLog_view = IregLog_view;
$p.ireg.create('log_view');

/**
* ### Отчет lurv
* ЛУРВ
* @class RepLurv
* @extends DataProcessorObj
* @constructor 
*/
class RepLurv extends DataProcessorObj{
get data(){return this._getter_ts('data')}
set data(v){this._setter_ts('data',v)}
}
$p.RepLurv = RepLurv;
class RepLurvDataRow extends TabularSectionRow{
get period(){return this._getter('period')}
set period(v){this._setter('period',v)}
get year(){return this._getter('year')}
set year(v){this._setter('year',v)}
get month(){return this._getter('month')}
set month(v){this._setter('month',v)}
get register(){return this._getter('register')}
set register(v){this._setter('register',v)}
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
get duration(){return this._getter('duration')}
set duration(v){this._setter('duration',v)}
get amount(){return this._getter('amount')}
set amount(v){this._setter('amount',v)}
}
$p.RepLurvDataRow = RepLurvDataRow;
$p.rep.create('lurv');
})();
};