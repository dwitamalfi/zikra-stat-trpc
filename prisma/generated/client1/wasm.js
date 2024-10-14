
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.20.0
 * Query Engine version: 06fc58a368dc7be9fbbbe894adf8d445d208c284
 */
Prisma.prismaVersion = {
  client: "5.20.0",
  engine: "06fc58a368dc7be9fbbbe894adf8d445d208c284"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.Midtrans_log_transactionsScalarFieldEnum = {
  id: 'id',
  approval_code: 'approval_code',
  bank: 'bank',
  finish_redirect_url: 'finish_redirect_url',
  fraud_status: 'fraud_status',
  gross_amount: 'gross_amount',
  masked_card: 'masked_card',
  order_id: 'order_id',
  payment_type: 'payment_type',
  status_code: 'status_code',
  status_message: 'status_message',
  transaction_id: 'transaction_id',
  transaction_status: 'transaction_status',
  transaction_time: 'transaction_time',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Midtrans_payment_listScalarFieldEnum = {
  id: 'id',
  app_name: 'app_name',
  app_code: 'app_code',
  app_icon: 'app_icon',
  deleted: 'deleted',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Midtrans_trx_request_paymentsScalarFieldEnum = {
  id: 'id',
  midtrans_order_id: 'midtrans_order_id',
  order_id: 'order_id',
  gross_amount: 'gross_amount',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at',
  customer_id: 'customer_id',
  redirect_url: 'redirect_url',
  midtrans_token_id: 'midtrans_token_id'
};

exports.Prisma.Mst_backgroundScalarFieldEnum = {
  id: 'id',
  background_name: 'background_name',
  created_at: 'created_at',
  updated_at: 'updated_at',
  background_svg: 'background_svg'
};

exports.Prisma.Mst_badgesScalarFieldEnum = {
  id: 'id',
  mission_id: 'mission_id',
  name: 'name',
  description: 'description',
  target: 'target',
  image_url: 'image_url',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted: 'deleted',
  target_category: 'target_category'
};

exports.Prisma.Mst_categoryScalarFieldEnum = {
  id: 'id',
  category_name: 'category_name',
  category_type: 'category_type',
  category_icon_name: 'category_icon_name',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted: 'deleted',
  background_name: 'background_name',
  description: 'description',
  is_highlight: 'is_highlight'
};

exports.Prisma.Mst_infaq_admissionsScalarFieldEnum = {
  id: 'id',
  infaq_program_id: 'infaq_program_id',
  user_id: 'user_id',
  is_anonymous: 'is_anonymous',
  transaction_number: 'transaction_number',
  admission_date: 'admission_date',
  description: 'description',
  amount: 'amount',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted: 'deleted',
  payment_type: 'payment_type'
};

exports.Prisma.Mst_infaq_programsScalarFieldEnum = {
  id: 'id',
  program_name: 'program_name',
  start_date: 'start_date',
  end_date: 'end_date',
  donation_target: 'donation_target',
  media: 'media',
  status: 'status',
  fundraiser: 'fundraiser',
  story_thumbnail: 'story_thumbnail',
  story_description: 'story_description',
  start_time: 'start_time',
  end_time: 'end_time',
  repeat: 'repeat',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted: 'deleted',
  is_patronage: 'is_patronage'
};

exports.Prisma.Mst_infaq_usagesScalarFieldEnum = {
  id: 'id',
  infaq_program_id: 'infaq_program_id',
  usage_type: 'usage_type',
  usage_date: 'usage_date',
  amount: 'amount',
  description: 'description',
  status: 'status',
  story_title: 'story_title',
  story_thumbnail: 'story_thumbnail',
  story_description: 'story_description',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted: 'deleted'
};

exports.Prisma.Mst_mission_checkpointsScalarFieldEnum = {
  id: 'id',
  checkpoint: 'checkpoint',
  mission_id: 'mission_id',
  point: 'point',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Mst_mission_detail_rewardsScalarFieldEnum = {
  id: 'id',
  mission_detail_id: 'mission_detail_id',
  value: 'value',
  type: 'type',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Mst_mission_detailsScalarFieldEnum = {
  id: 'id',
  mission_id: 'mission_id',
  name: 'name',
  target: 'target',
  unit: 'unit',
  created_at: 'created_at',
  updated_at: 'updated_at',
  type: 'type',
  dzikir_id: 'dzikir_id',
  surah: 'surah',
  description: 'description',
  infaq_id: 'infaq_id'
};

exports.Prisma.Mst_mission_seriesScalarFieldEnum = {
  id: 'id',
  mission_id: 'mission_id',
  title: 'title',
  description: 'description',
  created_at: 'created_at',
  updated_at: 'updated_at',
  order: 'order'
};

exports.Prisma.Mst_missionsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  total_day: 'total_day',
  description: 'description',
  status: 'status',
  deleted: 'deleted',
  created_at: 'created_at',
  updated_at: 'updated_at',
  type: 'type',
  benefit: 'benefit',
  color: 'color',
  registration_start_date: 'registration_start_date',
  registration_end_date: 'registration_end_date',
  daily_point: 'daily_point',
  event_start_date: 'event_start_date',
  event_end_date: 'event_end_date',
  image_url: 'image_url',
  activation_date: 'activation_date',
  mission_type: 'mission_type',
  banner: 'banner'
};

exports.Prisma.Mst_mobile_update_detailsScalarFieldEnum = {
  id: 'id',
  mobile_update_id: 'mobile_update_id',
  description: 'description',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Mst_mobile_updatesScalarFieldEnum = {
  id: 'id',
  version: 'version',
  order: 'order',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted: 'deleted'
};

exports.Prisma.Mst_notification_contentsScalarFieldEnum = {
  id: 'id',
  notification_id: 'notification_id',
  name: 'name',
  caption: 'caption',
  date: 'date',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted: 'deleted'
};

exports.Prisma.Mst_notification_local_location_pray_schedulesScalarFieldEnum = {
  id: 'id',
  notification_local_location_id: 'notification_local_location_id',
  date: 'date',
  imsak: 'imsak',
  subuh: 'subuh',
  terbit: 'terbit',
  dhuha: 'dhuha',
  dzuhur: 'dzuhur',
  ashar: 'ashar',
  magrib: 'magrib',
  isya: 'isya',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted: 'deleted'
};

exports.Prisma.Mst_notification_local_locationsScalarFieldEnum = {
  id: 'id',
  shadow_id: 'shadow_id',
  location: 'location',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted: 'deleted'
};

exports.Prisma.Mst_notificationsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  caption: 'caption',
  type: 'type',
  media: 'media',
  start_date: 'start_date',
  end_date: 'end_date',
  time: 'time',
  menu: 'menu',
  link: 'link',
  repeat: 'repeat',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted: 'deleted',
  subtype: 'subtype',
  based_on_time: 'based_on_time'
};

exports.Prisma.Mst_quran_ayahScalarFieldEnum = {
  id: 'id',
  surah: 'surah',
  ayah: 'ayah',
  arabic: 'arabic',
  latin: 'latin',
  translate: 'translate',
  page: 'page',
  juz: 'juz'
};

exports.Prisma.Mst_quran_interpretationsScalarFieldEnum = {
  id: 'id',
  quran_ayah_id: 'quran_ayah_id',
  reference: 'reference',
  interpretation: 'interpretation',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted: 'deleted'
};

exports.Prisma.Mst_quran_recitersScalarFieldEnum = {
  id: 'id',
  name: 'name',
  image_url: 'image_url',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted: 'deleted'
};

exports.Prisma.Mst_quran_recitesScalarFieldEnum = {
  id: 'id',
  quran_reciter_id: 'quran_reciter_id',
  quran_ayah_id: 'quran_ayah_id',
  audio_url: 'audio_url',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted: 'deleted'
};

exports.Prisma.Mst_quran_surahScalarFieldEnum = {
  id: 'id',
  surah_name: 'surah_name',
  arabic: 'arabic',
  translate: 'translate',
  location: 'location',
  num_ayah: 'num_ayah'
};

exports.Prisma.Mst_tier_rewardsScalarFieldEnum = {
  id: 'id',
  tier_id: 'tier_id',
  value: 'value',
  type: 'type',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Mst_tiersScalarFieldEnum = {
  id: 'id',
  name: 'name',
  image_url: 'image_url',
  order: 'order',
  max_user: 'max_user',
  promote_limit: 'promote_limit',
  demote_limit: 'demote_limit',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted: 'deleted',
  color: 'color',
  share_image_url: 'share_image_url'
};

exports.Prisma.Mst_userScalarFieldEnum = {
  id: 'id',
  username: 'username',
  password: 'password',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted: 'deleted',
  name: 'name',
  quran_fluent: 'quran_fluent',
  role: 'role',
  email: 'email',
  photo_url: 'photo_url',
  uid: 'uid',
  total_point: 'total_point',
  is_anonymous: 'is_anonymous',
  tag_id: 'tag_id',
  customize_photo_url: 'customize_photo_url',
  birthplace: 'birthplace',
  birthdate: 'birthdate',
  gender: 'gender',
  address: 'address',
  phone_number: 'phone_number',
  mazhab: 'mazhab',
  device_type: 'device_type',
  total_dziko: 'total_dziko',
  deleted_at: 'deleted_at',
  marked_quran_ayah_id: 'marked_quran_ayah_id',
  last_seen_quran_ayah_id: 'last_seen_quran_ayah_id',
  identity_type: 'identity_type',
  identity_number: 'identity_number'
};

exports.Prisma.Mst_user_quran_hafalanScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  uid: 'uid',
  tag_id: 'tag_id',
  photo_url: 'photo_url',
  customize_photo_url: 'customize_photo_url',
  last_seen_quran_ayah_id: 'last_seen_quran_ayah_id',
  is_anonymous: 'is_anonymous',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted: 'deleted',
  deleted_at: 'deleted_at',
  username: 'username',
  password: 'password',
  quran_fluent: 'quran_fluent',
  role: 'role',
  marked_quran_ayah_id: 'marked_quran_ayah_id',
  total_point: 'total_point',
  total_dziko: 'total_dziko',
  birthplace: 'birthplace',
  birthdate: 'birthdate',
  gender: 'gender',
  address: 'address',
  phone_number: 'phone_number',
  identity_type: 'identity_type',
  identity_number: 'identity_number',
  mazhab: 'mazhab',
  device_type: 'device_type'
};

exports.Prisma.Notification_send_logsScalarFieldEnum = {
  id: 'id',
  notification_id: 'notification_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Prd_audit_trailScalarFieldEnum = {
  id: 'id',
  username: 'username',
  action: 'action',
  table_name: 'table_name',
  row_id: 'row_id',
  data: 'data',
  action_datetime: 'action_datetime',
  status: 'status',
  error_message: 'error_message'
};

exports.Prisma.Prd_doaScalarFieldEnum = {
  id: 'id',
  doa_name: 'doa_name',
  arabic_text: 'arabic_text',
  latin_text: 'latin_text',
  translate: 'translate',
  audio_name: 'audio_name',
  referensi: 'referensi',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted: 'deleted',
  category_id: 'category_id',
  transliteration: 'transliteration'
};

exports.Prisma.Prd_dzikirScalarFieldEnum = {
  id: 'id',
  dzikir_name: 'dzikir_name',
  dzikir_category: 'dzikir_category',
  created_at: 'created_at',
  updated_at: 'updated_at',
  is_reminder: 'is_reminder',
  reminder_at: 'reminder_at',
  greeting: 'greeting',
  color_reminder: 'color_reminder',
  type: 'type',
  deleted: 'deleted',
  description: 'description'
};

exports.Prisma.Prd_dzikir_detailScalarFieldEnum = {
  id: 'id',
  dzikir_id: 'dzikir_id',
  repeat: 'repeat',
  created_at: 'created_at',
  updated_at: 'updated_at',
  doa_name: 'doa_name',
  arabic_text: 'arabic_text',
  latin_text: 'latin_text',
  translate: 'translate',
  audio_name: 'audio_name',
  referensi: 'referensi',
  order_dzikir: 'order_dzikir',
  deleted: 'deleted'
};

exports.Prisma.Prd_islamic_contentScalarFieldEnum = {
  id: 'id',
  content_title: 'content_title',
  category_id: 'category_id',
  schedule_date: 'schedule_date',
  schedule_time: 'schedule_time',
  description: 'description',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Prd_temp_dzikirScalarFieldEnum = {
  id: 'id',
  dzikir_name: 'dzikir_name',
  dzikir_category: 'dzikir_category',
  created_at: 'created_at',
  updated_at: 'updated_at',
  status: 'status',
  dzikir_id: 'dzikir_id'
};

exports.Prisma.Prd_temp_dzikir_detailScalarFieldEnum = {
  id: 'id',
  dzikir_id: 'dzikir_id',
  repeat: 'repeat',
  created_at: 'created_at',
  updated_at: 'updated_at',
  doa_name: 'doa_name',
  arabic_text: 'arabic_text',
  latin_text: 'latin_text',
  translate: 'translate',
  audio_name: 'audio_name',
  referensi: 'referensi',
  order_dzikir: 'order_dzikir'
};

exports.Prisma.Prd_tier_roomsScalarFieldEnum = {
  id: 'id',
  tier_id: 'tier_id',
  room_end: 'room_end',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Prd_tracker_user_mission_detailsScalarFieldEnum = {
  id: 'id',
  tracker_user_mission_id: 'tracker_user_mission_id',
  mission_detail_id: 'mission_detail_id',
  target: 'target',
  achievement: 'achievement',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Prd_tracker_user_missionsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  mission_id: 'mission_id',
  date: 'date',
  created_at: 'created_at',
  updated_at: 'updated_at',
  total_point: 'total_point'
};

exports.Prisma.Prd_user_badgesScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  badge_id: 'badge_id',
  achievement: 'achievement',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted: 'deleted',
  achieved: 'achieved',
  status: 'status'
};

exports.Prisma.Prd_user_doa_favoritesScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  doa_id: 'doa_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Prd_user_dzikir_favoritesScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  dzikir_id: 'dzikir_id',
  category_id: 'category_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Prd_user_goalsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  name: 'name',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Prd_user_historiesScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  date: 'date',
  type: 'type',
  name: 'name',
  start_marker: 'start_marker',
  end_marker: 'end_marker',
  created_at: 'created_at',
  updated_at: 'updated_at',
  dzikir_id: 'dzikir_id',
  dzikir_detail_id: 'dzikir_detail_id',
  total_ayah: 'total_ayah'
};

exports.Prisma.Prd_user_history_pointsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  type: 'type',
  date: 'date',
  mission_id: 'mission_id',
  in_point: 'in_point',
  out_point: 'out_point',
  created_at: 'created_at',
  updated_at: 'updated_at',
  dzikir_id: 'dzikir_id'
};

exports.Prisma.Prd_user_history_rewardsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  mission_detail_id: 'mission_detail_id',
  value: 'value',
  type: 'type',
  created_at: 'created_at',
  updated_at: 'updated_at',
  date: 'date',
  source: 'source',
  mission_id: 'mission_id',
  dzikir_id: 'dzikir_id',
  tier_id: 'tier_id',
  pages: 'pages',
  infaq_id: 'infaq_id'
};

exports.Prisma.Prd_user_infaq_program_remindersScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  infaq_program_id: 'infaq_program_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  status: 'status'
};

exports.Prisma.Prd_user_mission_remindersScalarFieldEnum = {
  id: 'id',
  user_mission_id: 'user_mission_id',
  mission_detail_name: 'mission_detail_name',
  is_reminder: 'is_reminder',
  reminder_at: 'reminder_at',
  created_at: 'created_at',
  updated_at: 'updated_at',
  type: 'type'
};

exports.Prisma.Prd_user_missionsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  mission_id: 'mission_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  total_point: 'total_point',
  reminder_at: 'reminder_at',
  mission_end_date: 'mission_end_date',
  mission_start_date: 'mission_start_date'
};

exports.Prisma.Prd_user_quran_ayah_favoritesScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  surah_id: 'surah_id',
  ayah_id: 'ayah_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Prd_user_quran_ayah_marksScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  quran_surah_id: 'quran_surah_id',
  quran_ayah_id: 'quran_ayah_id',
  name: 'name',
  color: 'color',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted: 'deleted'
};

exports.Prisma.Prd_user_settingsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  type: 'type',
  translation_status: 'translation_status',
  transliteration_status: 'transliteration_status',
  arabic_font_size: 'arabic_font_size',
  transliteration_font_size: 'transliteration_font_size',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Prd_user_streaksScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  date: 'date',
  dzikir_done: 'dzikir_done',
  quran_done: 'quran_done',
  created_at: 'created_at',
  updated_at: 'updated_at',
  infaq_done: 'infaq_done'
};

exports.Prisma.Prd_user_tier_roomsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  tier_room_id: 'tier_room_id',
  total_point: 'total_point',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  midtrans_log_transactions: 'midtrans_log_transactions',
  midtrans_payment_list: 'midtrans_payment_list',
  midtrans_trx_request_payments: 'midtrans_trx_request_payments',
  mst_background: 'mst_background',
  mst_badges: 'mst_badges',
  mst_category: 'mst_category',
  mst_infaq_admissions: 'mst_infaq_admissions',
  mst_infaq_programs: 'mst_infaq_programs',
  mst_infaq_usages: 'mst_infaq_usages',
  mst_mission_checkpoints: 'mst_mission_checkpoints',
  mst_mission_detail_rewards: 'mst_mission_detail_rewards',
  mst_mission_details: 'mst_mission_details',
  mst_mission_series: 'mst_mission_series',
  mst_missions: 'mst_missions',
  mst_mobile_update_details: 'mst_mobile_update_details',
  mst_mobile_updates: 'mst_mobile_updates',
  mst_notification_contents: 'mst_notification_contents',
  mst_notification_local_location_pray_schedules: 'mst_notification_local_location_pray_schedules',
  mst_notification_local_locations: 'mst_notification_local_locations',
  mst_notifications: 'mst_notifications',
  mst_quran_ayah: 'mst_quran_ayah',
  mst_quran_interpretations: 'mst_quran_interpretations',
  mst_quran_reciters: 'mst_quran_reciters',
  mst_quran_recites: 'mst_quran_recites',
  mst_quran_surah: 'mst_quran_surah',
  mst_tier_rewards: 'mst_tier_rewards',
  mst_tiers: 'mst_tiers',
  mst_user: 'mst_user',
  mst_user_quran_hafalan: 'mst_user_quran_hafalan',
  notification_send_logs: 'notification_send_logs',
  prd_audit_trail: 'prd_audit_trail',
  prd_doa: 'prd_doa',
  prd_dzikir: 'prd_dzikir',
  prd_dzikir_detail: 'prd_dzikir_detail',
  prd_islamic_content: 'prd_islamic_content',
  prd_temp_dzikir: 'prd_temp_dzikir',
  prd_temp_dzikir_detail: 'prd_temp_dzikir_detail',
  prd_tier_rooms: 'prd_tier_rooms',
  prd_tracker_user_mission_details: 'prd_tracker_user_mission_details',
  prd_tracker_user_missions: 'prd_tracker_user_missions',
  prd_user_badges: 'prd_user_badges',
  prd_user_doa_favorites: 'prd_user_doa_favorites',
  prd_user_dzikir_favorites: 'prd_user_dzikir_favorites',
  prd_user_goals: 'prd_user_goals',
  prd_user_histories: 'prd_user_histories',
  prd_user_history_points: 'prd_user_history_points',
  prd_user_history_rewards: 'prd_user_history_rewards',
  prd_user_infaq_program_reminders: 'prd_user_infaq_program_reminders',
  prd_user_mission_reminders: 'prd_user_mission_reminders',
  prd_user_missions: 'prd_user_missions',
  prd_user_quran_ayah_favorites: 'prd_user_quran_ayah_favorites',
  prd_user_quran_ayah_marks: 'prd_user_quran_ayah_marks',
  prd_user_settings: 'prd_user_settings',
  prd_user_streaks: 'prd_user_streaks',
  prd_user_tier_rooms: 'prd_user_tier_rooms'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
