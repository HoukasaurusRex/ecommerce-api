PGDMP     &    1                y            postgres    13.2    13.3 )    ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    16407    postgres    DATABASE     ]   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';
    DROP DATABASE postgres;
                terminallychill    false            ?           0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   terminallychill    false    3298                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                terminallychill    false            ?           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   terminallychill    false    3            ?            1259    160636    Companys    TABLE     ?   CREATE TABLE public."Companys" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Companys";
       public         heap    postgres    false    3            ?            1259    160634    Companys_id_seq    SEQUENCE     ?   CREATE SEQUENCE public."Companys_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Companys_id_seq";
       public          postgres    false    202    3            ?           0    0    Companys_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Companys_id_seq" OWNED BY public."Companys".id;
          public          postgres    false    201            ?            1259    160644 	   Customers    TABLE     ?   CREATE TABLE public."Customers" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "CompanyId" integer
);
    DROP TABLE public."Customers";
       public         heap    postgres    false    3            ?            1259    160642    Customers_id_seq    SEQUENCE     ?   CREATE SEQUENCE public."Customers_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."Customers_id_seq";
       public          postgres    false    3    204            ?           0    0    Customers_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."Customers_id_seq" OWNED BY public."Customers".id;
          public          postgres    false    203            ?            1259    160657    Products    TABLE     ?   CREATE TABLE public."Products" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "CompanyId" integer
);
    DROP TABLE public."Products";
       public         heap    postgres    false    3            ?            1259    160655    Products_id_seq    SEQUENCE     ?   CREATE SEQUENCE public."Products_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Products_id_seq";
       public          postgres    false    3    206            ?           0    0    Products_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Products_id_seq" OWNED BY public."Products".id;
          public          postgres    false    205            ?            1259    160670    Sales    TABLE     ?   CREATE TABLE public."Sales" (
    id integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "ProductId" integer
);
    DROP TABLE public."Sales";
       public         heap    postgres    false    3            ?            1259    160668    Sales_id_seq    SEQUENCE     ?   CREATE SEQUENCE public."Sales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Sales_id_seq";
       public          postgres    false    3    208            ?           0    0    Sales_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."Sales_id_seq" OWNED BY public."Sales".id;
          public          postgres    false    207            ?            1259    160246    SequelizeMeta    TABLE     R   CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);
 #   DROP TABLE public."SequelizeMeta";
       public         heap    postgres    false    3            A           2604    160639    Companys id    DEFAULT     n   ALTER TABLE ONLY public."Companys" ALTER COLUMN id SET DEFAULT nextval('public."Companys_id_seq"'::regclass);
 <   ALTER TABLE public."Companys" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    201    202    202            B           2604    160647    Customers id    DEFAULT     p   ALTER TABLE ONLY public."Customers" ALTER COLUMN id SET DEFAULT nextval('public."Customers_id_seq"'::regclass);
 =   ALTER TABLE public."Customers" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    203    204    204            C           2604    160660    Products id    DEFAULT     n   ALTER TABLE ONLY public."Products" ALTER COLUMN id SET DEFAULT nextval('public."Products_id_seq"'::regclass);
 <   ALTER TABLE public."Products" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    206    205    206            D           2604    160673    Sales id    DEFAULT     h   ALTER TABLE ONLY public."Sales" ALTER COLUMN id SET DEFAULT nextval('public."Sales_id_seq"'::regclass);
 9   ALTER TABLE public."Sales" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    208    207    208            ?          0    160636    Companys 
   TABLE DATA           H   COPY public."Companys" (id, name, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    202   ?,       ?          0    160644 	   Customers 
   TABLE DATA           V   COPY public."Customers" (id, name, "createdAt", "updatedAt", "CompanyId") FROM stdin;
    public          postgres    false    204   M-       ?          0    160657    Products 
   TABLE DATA           U   COPY public."Products" (id, name, "createdAt", "updatedAt", "CompanyId") FROM stdin;
    public          postgres    false    206   ?-       ?          0    160670    Sales 
   TABLE DATA           L   COPY public."Sales" (id, "createdAt", "updatedAt", "ProductId") FROM stdin;
    public          postgres    false    208   d.       ?          0    160246    SequelizeMeta 
   TABLE DATA           /   COPY public."SequelizeMeta" (name) FROM stdin;
    public          postgres    false    200   ?.       ?           0    0    Companys_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."Companys_id_seq"', 2, true);
          public          postgres    false    201            ?           0    0    Customers_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Customers_id_seq"', 3, true);
          public          postgres    false    203            ?           0    0    Products_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."Products_id_seq"', 4, true);
          public          postgres    false    205            ?           0    0    Sales_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public."Sales_id_seq"', 6, true);
          public          postgres    false    207            H           2606    160641    Companys Companys_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Companys"
    ADD CONSTRAINT "Companys_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."Companys" DROP CONSTRAINT "Companys_pkey";
       public            postgres    false    202            J           2606    160649    Customers Customers_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."Customers"
    ADD CONSTRAINT "Customers_pkey" PRIMARY KEY (id);
 F   ALTER TABLE ONLY public."Customers" DROP CONSTRAINT "Customers_pkey";
       public            postgres    false    204            L           2606    160662    Products Products_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Products"
    ADD CONSTRAINT "Products_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."Products" DROP CONSTRAINT "Products_pkey";
       public            postgres    false    206            N           2606    160675    Sales Sales_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."Sales"
    ADD CONSTRAINT "Sales_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public."Sales" DROP CONSTRAINT "Sales_pkey";
       public            postgres    false    208            F           2606    160250     SequelizeMeta SequelizeMeta_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);
 N   ALTER TABLE ONLY public."SequelizeMeta" DROP CONSTRAINT "SequelizeMeta_pkey";
       public            postgres    false    200            O           2606    160650 "   Customers Customers_CompanyId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public."Customers"
    ADD CONSTRAINT "Customers_CompanyId_fkey" FOREIGN KEY ("CompanyId") REFERENCES public."Companys"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 P   ALTER TABLE ONLY public."Customers" DROP CONSTRAINT "Customers_CompanyId_fkey";
       public          postgres    false    204    3144    202            P           2606    160663     Products Products_CompanyId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public."Products"
    ADD CONSTRAINT "Products_CompanyId_fkey" FOREIGN KEY ("CompanyId") REFERENCES public."Companys"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 N   ALTER TABLE ONLY public."Products" DROP CONSTRAINT "Products_CompanyId_fkey";
       public          postgres    false    3144    206    202            Q           2606    160676    Sales Sales_ProductId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public."Sales"
    ADD CONSTRAINT "Sales_ProductId_fkey" FOREIGN KEY ("ProductId") REFERENCES public."Products"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 H   ALTER TABLE ONLY public."Sales" DROP CONSTRAINT "Sales_ProductId_fkey";
       public          postgres    false    208    3148    206            ?   N   x?3??HU??4202?5??56T02?2??21?316?6??!e??2kwJ?)ASehT?g`h?i L?d@? ?*      ?   ^   x???A
?  ???
+???.K*?????A?cřF?%6?/O\Y?!T?+??L@
?k?????B@q?x??S??-6$J??ɵƱ? >?0?      ?   ?   x?}ο?0?????M?h??.???KE/J?:??F'?4Ο?}s(:?E?\?W^i?B7E??t?U[???6??G?Hl???W???1??~???V[es/???P?}8sr??8F???y?j??L??NF?O~??8?rC?T??>z ?KDW      ?   \   x?}˱?0????a?~?????s? B¡>?M?n??J?]?E???h???TѨ?|?r?e4o?	???ڢ??EDM?R??|h?! Ng?@8      ?   $   x?30???+N-*?O.-.??M-*?+)?????? ?		a     