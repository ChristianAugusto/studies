-- bigserial is a number type with auto increment behaving

create table people (
  id bigserial not null,
  name varchar(100) not null,
  email varchar(100) not null,
  cpf varchar(11) not null,
  rg varchar(15) not null,

  primary key (id)
);

create table telephones (
  value varchar(25) not null,
  personId bigserial not null,

  primary key (value)
);

alter table telephones
add constraint fk_telephones_1
foreign key (personId)
references people (id);
