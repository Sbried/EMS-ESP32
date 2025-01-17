
| Name       | Type       | SubType  | Offset        | Size               | Notes                           | File                            |
|------------|------------|----------|---------------|--------------------|---------------------------------|---------------------------------|
| bootloader |            |          | 0x0000/0x1000 | 0x8000   (32 KB)   | ESP32-S3=0x1000, ESP32=0x1000   | bootloader*.bin                 |
| partitions |            |          | 0x8000        | 0x1000   (4 KB)    | same for each board             | partitions*.bin                 |
| -          |            |          |               |                    |                                 |                                 |
| nvs        | data       | nvs      | 0x9000        | 0x5000   (20 KB)   | reserved for ESP32              |                                 |
| otadata    | data       | ota      | 0xE000        | 0x2000   (8 KB)    | same for each board             | boot_app0*.bin                  |
| boot       | app        | factory  | 0x10000       | 0x480000 (4.5 MB)  | default boot partition          | EMS-ESP firmware *.bin/loader   |
| app0       | app        | ota_0    | 0x290000      | 0x490000 (4.56 MB) | OTA cycle 1                     | EMS-ESP firmware *.bin          |
| app1       | app        | ota_1    | 0x510000      | 0x490000 (4.56 MB) | OTA cycle 2                     | EMS-ESP firmware *.bin          |
| nvs1       | data       | nvs      | 0xAA0000      | 0x040000 (256 KB)  | custom for EMS-ESP              | (generated by script)           |
| spiffs     | data       | spiffs   | 0xAA0000      | 0x200000 (2 MB)    | for LittleFS/EMS-ESP filesystem | (not used)                      |
| coredump   | data       | coredump | 0xCE0000      | 0x010000 (64 KB)   |                                 |                                 |
