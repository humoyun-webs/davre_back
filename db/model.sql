 CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

create type company_type as enum('1','2');

create table users(
        user_id uuid primary key DEFAULT uuid_generate_v4() null,   
         name varchar(255) not null,
        l_name varchar(255) not null,
        email varchar(64) not null unique,
        password varchar(64) default 'reitmanz' not null,
        country varchar(64) not null, 
        role varchar(32) default 'admin',  
        created_at timestamp default current_timestamp,
        updated_at timestamp default null,
        isDelete BOOLEAN NOT NULL DEFAULT FALSE
);

    insert into users(
            name,
            l_name,
            email,
            password,
            country
    )values(
        'Humoyun',
        'Eshpolatov',
        'humoyuneshpolatov5@gmail.com',
        '$2a$12$GV2rcbFJaGgSzvBK578D7u4F/8CsLdDGtYvouVROU.nSVx65KqRrC',
        'Russia'
    );


create table companies(
company_id uuid primary key DEFAULT uuid_generate_v4() null,
company_tin int not null,
company_mfo char(10) not null,
company_account char(30) not null,
company_bank char(255) not null,
company_type company_type not null,
company_director char(255) not null,
company_adress  char(255) not null,
company_phone char (20) not null,
company_bill_id int default null,
notef boolean default false,
user_id uuid default '307e0cc1-8e28-46fe-9806-13f0f4f14d33', 
created_at timestamp default current_timestamp
);


-- 2. company_tin int2(9)
-- 3. company_mfo char(10)
-- 4. company_account char(30)
-- 5. company_bank char(255)
-- 6. company_type int2
-- 7. company_director char(255)
-- 8. company_adress char(255)
-- 9. company_phone char (20)
--10. company_bill_id int8