import type { Translation } from '../i18n-types';

const de: Translation = {
  LANGUAGE: 'Sprache',
  RETRY: 'Neuer Versuch',
  LOADING: 'Laden',
  IS_REQUIRED: '{0} ist erforderlich',
  SIGN_IN: 'Einloggen',
  SIGN_OUT: 'Ausloggen',
  USERNAME: 'Nutzername',
  PASSWORD: 'Passwort',
  SU_PASSWORD: 'Superuser-Passwort',
  SETTINGS_OF: '{0} Einstellungen',
  HELP: 'Hilfe',
  LOGGED_IN: 'Eingeloggt als {name}',
  PLEASE_SIGNIN: 'Bitte einloggen, um fortzufahren',
  UPLOAD_SUCCESSFUL: 'Hochladen erfolgreich',
  DOWNLOAD_SUCCESSFUL: 'Herunterladen erfolgreich',
  INVALID_LOGIN: 'Ungültige Login-Daten',
  NETWORK: 'Netzwerk',
  SECURITY: 'Sicherheit',
  ONOFF_CAP: 'AN/AUS',
  ONOFF: 'an/aus',
  TYPE: 'Typ',
  DESCRIPTION: 'Bezeichnung',
  ENTITIES: 'Entitäten',
  REFRESH: 'Aktualisieren',
  EXPORT: 'Exportieren',
  FAVORITES: "Favoriten",
  DEVICE_DETAILS: 'Gerätedetails',
  ID_OF: '{0}-ID',
  DEVICE: 'Geräte',
  PRODUCT: 'Produkt',
  VERSION: 'Version',
  BRAND: 'Marke',
  ENTITY_NAME: 'Entitätsname',
  VALUE: '{{wert|Wert}}',
  DEVICES: 'Geräte',
  SENSORS: 'Sensoren',
  RUN_COMMAND: 'Befehl ausführen',
  CHANGE_VALUE: 'Wert ändern',
  CANCEL: 'Abbrechen',
  RESET: 'Zurücksetzen',
  APPLY_CHANGES: 'Änderungen anwenden ({0})',
  UPDATE: 'Update',
  EXECUTE: 'Ausführen',
  REMOVE: 'Entfernen',
  PROBLEM_UPDATING: 'Problem beim Aktualisieren',
  PROBLEM_LOADING: 'Problem beim Laden',
  ANALOG_SENSOR: 'Analogsensor',
  ANALOG_SENSORS: 'Analogsensoren',
  SETTINGS: 'Einstellungen',
  UPDATED_OF: '{0} Aktualisiert',
  UPDATE_OF: '{0} Aktualisieren',
  REMOVED_OF: '{0} Entfernt',
  DELETION_OF: '{0} Löschung',
  OFFSET: 'Position',
  FACTOR: 'Faktor',
  FREQ: 'Frequenz',
  DUTY_CYCLE: 'Arbeitszyklus',
  UNIT: 'Maßeinheit',
  STARTVALUE: 'Startwert',
  WARN_GPIO: 'Warnung: Vorsicht bei der korrekten Wahl des GPIO!',
  EDIT: 'Editiere',
  SENSOR: 'Sensor',
  TEMP_SENSOR: 'Temperatursensor',
  TEMP_SENSORS: 'Temperatursensoren',
  WRITE_CMD_SENT: 'Befehl schreiben wurde gesendet',
  EMS_BUS_WARNING: 'EMS-Bus getrennt. Wenn diese Warnung nach einigen Sekunden immer noch besteht, überprüfen Sie bitte die Einstellungen und das Board-Profil.',
  EMS_BUS_SCANNING: 'Suche nach EMS Geräten...',
  CONNECTED: 'Verbunden',
  TX_ISSUES: 'Tx-Probleme - Versuchen Sie einen anderen Tx-Modus',
  DISCONNECTED: 'Getrennt',
  EMS_SCAN: 'Möchten Sie wirklich eine vollständige Gerätesuche des EMS-Busses starten?',
  DATA_TRAFFIC: 'Datenverkehr',
  EMS_DEVICE: 'EMS Gerät',
  SUCCESS: 'ERFOLG',
  FAIL: 'FEHLER',
  QUALITY: 'QUALITÄT',
  SCAN: 'Suche',
  STATUS_NAMES: [
    'EMS-Telegramme empfangen (Rx)',
    'EMS-Telegramme gelesen (Tx)',
    'EMS-Telegramme geschrieben (Tx)',
    'Temperatursensoren gelesen',
    'Analogsensoren gelesen',
    'MQTT-Nachrichten gesendet',
    'API-Aufrufe',
    'Syslog-Mitteilungen'
  ],
  NUM_DAYS: '{num} Tag{{e}}',
  NUM_SECONDS: '{num} Sekunde{{n}}',
  NUM_HOURS: '{num} Stunde{{n}}',
  NUM_MINUTES: '{num} Minute{{n}}',
  APPLICATION: 'Anwendung',
  CUSTOMIZATIONS: 'Anpassungen',
  APPLICATION_RESTARTING: 'EMS-ESP startet neu',
  BOARD_PROFILE: 'Board-Profil',
  CUSTOM: 'Benutzerdefiniert',
  GPIO_OF: '{0} GPIO',
  BUTTON: 'Taste',
  TEMPERATURE: 'Temperatur',
  PHY_TYPE: 'Eth PHY Typ',
  DISABLED: 'deaktiviert',
  TX_MODE: 'EMS Tx-Modus',
  HARDWARE: 'Hardware',
  EMS_BUS: '{{BUS|EMS BUS}}',
  GENERAL_OPTIONS: 'Allgemeine Optionen',
  LANGUAGE_ENTITIES: 'Sprache (für Geräteentitäten)',
  HIDE_LED: 'LED ausblenden',
  ENABLE_TELNET: 'Aktiviere Telnet-Konsole',
  ENABLE_ANALOG: 'Aktiviere Analogsensoren',
  CONVERT_FAHRENHEIT: 'Konvertiere Temperaturwerte in Fahrenheit',
  BYPASS_TOKEN: 'Zugriffstoken-Autorisierung bei API-Aufrufen umgehen',
  READONLY: 'Nur-Lese-Modus aktivieren (blockiert alle ausgehenden EMS Tx-Schreibbefehle)',
  UNDERCLOCK_CPU: 'CPU-Geschwindigkeit untertakten',
  REMOTE_TIMEOUT: 'Timeout',
  REMOTE_TIMEOUT_EN: 'Deaktiviere Remote bei fehlender Temperatur',
  HEATINGOFF: 'Heizen ausschalten beim EMS-ESP Start',
  MIN_DURATION: 'Dauer bis die Dusche erkannt wrid',
  ENABLE_SHOWER_TIMER: 'Duschtimer aktivieren',
  ENABLE_SHOWER_ALERT: 'Duschalarm aktivieren',
  TRIGGER_TIME: 'Auslösezeit',
  COLD_SHOT_DURATION: 'Kaltwasserzugabe',
  FORMATTING_OPTIONS: 'Formatierungsoptionen',
  BOOLEAN_FORMAT_DASHBOARD: 'Boolsches Format für Web',
  BOOLEAN_FORMAT_API: 'Boolesches Format API/MQTT',
  ENUM_FORMAT: 'Enum Format API/MQTT',
  INDEX: 'Index',
  ENABLE_PARASITE: '1-Wire parasitäre Stomversorgung',
  LOGGING: 'Protokollierung',
  LOG_HEX: 'EMS-Telegramme hexadezimal protokollieren',
  ENABLE_SYSLOG: 'Syslog aktivieren',
  LOG_LEVEL: 'Protokollebene',
  MARK_INTERVAL: 'Intervallmarke',
  SECONDS: 'Sekunden',
  MINUTES: 'Minuten',
  HOURS: 'Stunden',
  RESTART: 'Neu starten',
  RESTART_TEXT: 'EMS-ESP muss neu gestartet werden, um geänderte Systemeinstellungen zu übernehmen.',
  RESTART_CONFIRM: 'EMS-ESP wirklich neu starten?',
  COMMAND: 'Befehl',
  CUSTOMIZATIONS_RESTART: 'Alle Anpassungen wurden entfernt. Neustart...',
  CUSTOMIZATIONS_FULL: 'Ausgewählte Entitäten haben das Limit überschritten. Bitte stapelweise speichern!',
  CUSTOMIZATIONS_SAVED: 'Anpassungen gespeichert',
  CUSTOMIZATIONS_HELP_1: 'Wählen Sie ein Gerät aus und passen Sie die Entitäten mithilfe der Optionen an.',
  CUSTOMIZATIONS_HELP_2: 'Als Favorit markieren',
  CUSTOMIZATIONS_HELP_3: 'Schreibaktion deaktivieren',
  CUSTOMIZATIONS_HELP_4: 'Von MQTT und API ausschließen',
  CUSTOMIZATIONS_HELP_5: 'Aus dem Kontrollzentrum ausblenden',
  CUSTOMIZATIONS_HELP_6: 'Aus dem Speicher löschen',
  SELECT_DEVICE: 'Wählen Sie ein Gerät aus',
  SET_ALL: 'Setzen Sie alle',
  OPTIONS: 'Optionen',
  NAME: 'Name',
  CUSTOMIZATIONS_RESET: 'Möchten Sie wirklich alle Anpassungen entfernen, einschließlich der benutzerdefinierten Einstellungen der Temperatur- und Analogsensoren?',
  SUPPORT_INFORMATION: 'Unterstützende Informationen',
  HELP_INFORMATION_1: 'EMS-ESP Konfigurationsanweisungen und mehr finden Sie im Online-Wiki.',
  HELP_INFORMATION_2: 'Für einen Live-Community-Chat besuchen Sie unseren Discord-Server.',
  HELP_INFORMATION_3: 'Um neue Funktionen anzufragen oder Fehler zu melden, eröffnen Sie ein Issue auf GitHub.',
  HELP_INFORMATION_4: 'Bitte laden Sie die Systemdetails und hängen Sie sie an das Support-Issue an.',
  HELP_INFORMATION_5: 'Für Hilfe und Fragen wenden Sie sich bitte an Ihren Installateur.',
  UPLOAD: 'Hochladen',
  DOWNLOAD: '{{H|h|h}}erunterladen',
  INSTALL: 'Installieren {0}',
  ABORTED: 'abgebrochen',
  FAILED: 'gescheitert',
  SUCCESSFUL: 'erfolgreich',
  SYSTEM: 'System',
  LOG_OF: '{0}protokoll',
  STATUS_OF: '{0} Status',
  DOWNLOAD_UPLOAD: 'Herunterladen/Hochladen',
  CLOSE: 'Schließen',
  USE: 'Verwenden Sie',
  FACTORY_RESET: 'Werkseinstellung',
  SYSTEM_FACTORY_TEXT: 'EMS-ESP wurde auf Werkseinstellung gesetzt und startet als Zugangspunkt neu.',
  SYSTEM_FACTORY_TEXT_DIALOG: 'Sind Sie sicher, alle Einstellungen auf Werkseinstellung zu setzen?',
  STABLE: 'Stabil',
  DEVELOPMENT: 'Entwicklung',
  RELEASE_NOTES: 'Versionshinweise',
  EMS_ESP_VER: 'Firmware-Version',
  UPTIME: 'Systembetriebszeit',
  FREE_MEMORY: 'Freier RAM Speicher',
  PSRAM: 'PSRAM (Größe / Frei)',
  FLASH: 'Flash Speicher (Größe , Geschwindigkeit)',
  APPSIZE: 'Programm (Partition: Genutzt / Frei)',
  FILESYSTEM: 'Dateisystem (Genutzt / Frei)',
  BUFFER_SIZE: 'Max. Puffergröße',
  COMPACT: 'Kompakte Darstellung',
  DOWNLOAD_SETTINGS_TEXT: 'Erstellen Sie eine Sicherung Ihrer Konfigurationen und Einstellungen.',
  UPLOAD_TEXT: 'Laden Sie eine neue Firmware-Datei (.bin) oder eine Sicherungsdatei (.json) hoch.',
  UPLOAD_DROP_TEXT: 'Klicken Sie hier, oder ziehen Sie eine Datei hierher.',
  ERROR: 'Unerwarteter Fehler, bitte versuchen Sie es erneut.',
  TIME_SET: 'Zeit gesetzt',
  MANAGE_USERS: 'Nutzerverwaltung',
  IS_ADMIN: 'Ist Admin',
  USER_WARNING: 'Sie müssen mindestens einen Admin-Nutzer konfigurieren',
  ADD: 'Hinzufügen',
  ACCESS_TOKEN_FOR: 'Zugangs-Token für',
  ACCESS_TOKEN_TEXT: 'Dieses Token ist für REST-API Aufrufe bestimmt, die eine Authentifizierung benötigen. Es kann entweder als Bearer Token im `Authorization-Header` oder in der Access_Token URL verwendet werden.',
  GENERATING_TOKEN: 'Erzeuge Token',
  USER: 'Nutzer',
  MODIFY: 'Ändern',
  SU_TEXT: 'Das Superuser-Passwort (su) wird zum Signieren der Authentifikations-Tokens verwendet und ermöglicht Admin-Berechtigung in der Konsole.',
  NOT_ENABLED: 'Nicht aktiviert',
  ERRORS_OF: '{0} Fehler',
  DISCONNECT_REASON: 'Grund der Verbindungsunterbrechung',
  ENABLE_MQTT: 'MQTT aktivieren',
  BROKER: 'Broker',
  CLIENT: 'Client',
  BASE_TOPIC: 'Base',
  OPTIONAL: 'Optional',
  FORMATTING: 'Formattierung',
  MQTT_FORMAT: 'Topic/Payload Format',
  MQTT_NEST_1: 'Eingebettet in einem Gesamttopic',
  MQTT_NEST_2: 'Als einzelne Topics',
  MQTT_RESPONSE: 'Veröffentliche die Kommandoantwort als `response` Topic',
  MQTT_PUBLISH_TEXT_1: 'Veröffentliche einzelne Werte bei Veränderung als eigene Topics',
  MQTT_PUBLISH_TEXT_2: 'Veröffentliche als Kommando-Topic (ioBroker)',
  MQTT_PUBLISH_TEXT_3: 'Aktiviere `MQTT Discovery`',
  MQTT_PUBLISH_TEXT_4: 'Prefix für die `Discovery`-Topics',
  MQTT_PUBLISH_TEXT_5: 'Discovery Typ',
  MQTT_PUBLISH_INTERVALS: 'Veröffentlichungs-Intervalle',
  MQTT_INT_BOILER: 'Boiler und Wärmepumpen',
  MQTT_INT_THERMOSTATS: 'Thermostate',
  MQTT_INT_SOLAR: 'Solarmodule',
  MQTT_INT_MIXER: 'Mischermodule',
  MQTT_INT_WATER: 'Warmwassermodule',
  MQTT_QUEUE: 'MQTT Queue',
  DEFAULT: 'Standard',
  MQTT_ENTITY_FORMAT: 'Entitäts-ID Format',
  MQTT_ENTITY_FORMAT_0: 'Einzelinstanz, Langname (v3.4)',
  MQTT_ENTITY_FORMAT_1: 'Einzelinstanz, MQTT-Namen',
  MQTT_ENTITY_FORMAT_2: 'Mehrfachinstanzen, MQTT-Namen',
  MQTT_CLEAN_SESSION: 'Setze `Clean Session`',
  MQTT_RETAIN_FLAG: 'Setze `Retain flag` immer',
  INACTIVE: 'Inaktiv',
  ACTIVE: 'Aktiv',
  UNKNOWN: 'Unbekannt',
  SET_TIME: 'Zeiteinstellung',
  SET_TIME_TEXT: 'Geben Sie das Datum und die Zeit ein.',
  LOCAL_TIME: 'Lokalzeit',
  UTC_TIME: 'UTC Zeit',
  ENABLE_NTP: 'Aktiviere NTP',
  NTP_SERVER: 'NTP-Server',
  TIME_ZONE: 'Zeitzone',
  ACCESS_POINT: 'Zugangspunkt',
  AP_PROVIDE: 'Aktiviere Zugangspunkt',
  AP_PROVIDE_TEXT_1: 'Immer',
  AP_PROVIDE_TEXT_2: 'Wenn WiFi nicht verbunden',
  AP_PROVIDE_TEXT_3: 'Niemals',
  AP_PREFERRED_CHANNEL: 'Bevorzugter Kanal',
  AP_HIDE_SSID: 'Verstecke SSID',
  AP_CLIENTS: 'AP-Clients',
  AP_MAX_CLIENTS: 'Max. Anzahl AP-Clients',
  AP_LOCAL_IP: 'Lokale IP',
  NETWORK_SCAN: 'Suche nach WiFi-Netzwerken',
  IDLE: 'Leerlauf',
  LOST: 'Verloren',
  SCANNING: 'Suche',
  SCAN_AGAIN: 'Erneute Suche',
  NETWORK_SCANNER: 'Netzwerksuche',
  NETWORK_NO_WIFI: 'Keine WiFi-Netzwerke gefunden',
  NETWORK_BLANK_SSID: 'Freilassen, um WiFi zu deaktivieren und ETH zu aktivieren.',
  NETWORK_BLANK_BSSID: 'Freilassen, um nur SSID für die Verbindung zu nutzen.',
  TX_POWER: 'Tx Leistung',
  HOSTNAME: 'Hostname',
  NETWORK_DISABLE_SLEEP: 'Deaktiviere WiFi-Schlafmodus',
  NETWORK_LOW_BAND: 'Verwende niedrige WiFi-Bandbreite',
  NETWORK_USE_DNS: 'Aktiviere mDNS Service',
  NETWORK_ENABLE_CORS: 'Aktiviere CORS',
  NETWORK_CORS_ORIGIN: 'CORS origin',
  NETWORK_FIXED_IP: 'Feste IP-Adresse',
  NETWORK_GATEWAY: 'Gateway',
  NETWORK_SUBNET: 'Subnetz Maske',
  NETWORK_DNS: 'DNS-Server',
  ADDRESS_OF: '{0}-Adresse',
  ADMINISTRATOR: 'Administrator',
  GUEST: 'Gast',
  NEW: 'neuer',
  NEW_NAME_OF: 'Ändere {0}',
  ENTITY: 'Entität',
  MIN: 'min',
  MAX: 'max',
  BLOCK_NAVIGATE_1: 'Sie haben ungesicherte Änderungen.',
  BLOCK_NAVIGATE_2: 'Beim verlassen der Seite verlieren Sie ungesicherte Einstellungen. Wollen Sie die Seite wirklich verlassen?',
  STAY: 'Bleiben',
  LEAVE: 'Verlassen',
  SCHEDULER: 'Planer',
  SCHEDULER_HELP_1: 'Fügen Sie eigene geplante Befehle zur Automatisierung hinzu. Vergeben Sie einen Entitätsnamen, um die Aktivierung über API/Mqtt zu steuern.',
  SCHEDULER_HELP_2: '00:00 aktiviert einmalige Ausführung beim Start.',
  SCHEDULE: 'Zeitplan',
  TIME: 'Zeit',
  TIMER: 'Timer',
  ONCHANGE: 'Bei Änderung',
  CONDITION: 'Zustand',
  IMMEDIATE: 'Sofort',
  SCHEDULE_UPDATED: 'Zeitplan aktualisiert',
  SCHEDULE_TIMER_1: 'beim Start',
  SCHEDULE_TIMER_2: 'jede Minute',
  SCHEDULE_TIMER_3: 'jede Stunde',
  CUSTOM_ENTITIES: 'Individuelle Entitäten',
  ENTITIES_HELP_1: 'Definition eigener EMS-Werte oder dynamischer Variablen',
  ENTITIES_UPDATED: 'Entitäten gespeichert',
  WRITEABLE: 'Schreibbar',
  SHOWING: 'Anzeigen von',
  SEARCH: 'Suche',
  CERT: 'TLS Zertifikat (Freilassen für unsichere Verbindung)',
  ENABLE_TLS: 'Aktiviere TLS',
  ON: 'An',
  OFF: 'Aus',
  POLARITY: 'Polarität',
  ACTIVEHIGH: 'Aktiv Positiv',
  ACTIVELOW: 'Aktiv Negativ',
  UNCHANGED: 'Unverändert',
  ALWAYS: 'Immer',
  ACTIVITY: 'Aktivität',
  CONFIGURE: 'Konfiguriere {0}',
  SYSTEM_MEMORY: 'Systemspeicher',
  APPLICATION_SETTINGS_1: 'Ändern Sie die EMS-ESP-Anwendungseinstellungen.',
  SECURITY_1: 'Benutzer hinzufügen oder entfernen',
  DOWNLOAD_UPLOAD_1: 'Einstellungen und Firmware herunterladen/hochladen',
  MODULES: 'Module',
  MODULES_1: 'Externe Module aktivieren oder deaktivieren',
  MODULES_UPDATED: 'Module aktualisiert',
  MODULES_DESCRIPTION: 'Klicken Sie auf das Modul, um EMS-ESP-Bibliotheksmodule zu aktivieren oder zu deaktivieren.',
  MODULES_NONE: 'Keine externen Module erkannt',
  RENAME: 'Umbenennen',
  ENABLE_MODBUS: 'Modbus aktivieren',
  VIEW_LOG: 'Sehen Sie sich das Protokoll an, um Probleme zu diagnostizieren.',
  UPLOAD_DRAG: 'Ziehen Sie eine Datei hierher oder klicken Sie, um eine auszuwählen.',
  SERVICES: 'Dienste',
  ALLVALUES: 'Alle Werte',
  SPECIAL_FUNCTIONS: 'Sonderfunktionen',
  WAIT_FIRMWARE: 'Die Firmware wird hochgeladen und installiert.',
  INSTALL_VERSION: 'Dadurch wird die Version installiert {0}. Sind Sie sicher?',
  SWITCH_DEV: 'Wechseln Sie zur Entwicklungsversion!',
  UPGRADE_AVAILABLE: 'Es ist ein Firmware-Upgrade verfügbar.',
  LATEST_VERSION: 'Sie verwenden die neueste Firmware-Version.',
  PLEASE_WAIT: 'Bitte warten',
  RESTARTING_PRE: 'Initialisierung',
  RESTARTING_POST: 'Vorbereitung',
  AUTO_SCROLL: 'Automatisches Scrollen',
  DASHBOARD: 'Dashboard', // TODO translate
  NO_DATA: 'No data available', // TODO translate
  DASHBOARD_1: 'Customize your dashboard by marking EMS entities as Favorites using the Customizations module.' // TODO translate
};

export default de;
