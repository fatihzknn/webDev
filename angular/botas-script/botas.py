# import psycopg2 as pg
# import pandas.io.sql as psql
# connection = pg.connect("host=192.168.42.56 dbname=postgres user=postgres password=passw0rd!")
# dataframe = psql.read_sql('select * from \"postgres\".public.botas_cpb', connection)
# print(dataframe.head())


import pandas as pd
import psycopg2 as pg

engine = pg.connect("dbname='postgres' user='postgres' host='192.168.42.56' port='5432' password='Passw0rd!!'")
df = pd.read_sql('select * from \"postgres\".public.botas_cpb', con=engine)
print(df.head())