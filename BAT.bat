cd C:\Program Files\MySQL\MySQL Shell 8.0\bin\
mysqlsh -u root -p"" agimplant -sNe 'show tables' | while read table; do mysql -u root-p"" -sNe "RENAME TABLE agimplant.$table TO pmanager.$table"; done