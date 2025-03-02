//Edebiyat
import product1Image from './images/edebiyat/product1.jpg';
import product2Image from './images/edebiyat/product2.jpg';
import product3Image from './images/edebiyat/product3.jpg';
import product4Image from './images/edebiyat/product4.jpg';
import product5Image from './images/edebiyat/product5.gif';

//Felsefe
import product6Image from './images/felsefe/product6.jpg';
import product7Image from './images/felsefe/product7.jpg';
import product8Image from './images/felsefe/product8.avif';
import product9Image from './images/felsefe/product9.jpg';
import product10Image from './images/felsefe/product10.jpg';

//Psikoloji
import product11Image from './images/psikoloji/product11.jpg';
import product12Image from './images/psikoloji/product12.jpg';
import product13Image from './images/psikoloji/product13.webp';
import product14Image from './images/psikoloji/product14.jpg';
import product15Image from './images/psikoloji/product15.jpg';

//Tarih
import product16Image from './images/tarih/product16.jpg';
import product17Image from './images/tarih/product17.jpg';
import product18Image from './images/tarih/product18.jpg';
import product19Image from './images/tarih/product19.jpg';
import product20Image from './images/tarih/product20.jpg';

//Bilim
import product21Image from './images/bilim/product21.jpg';
import product22Image from './images/bilim/product22.jpg';
import product23Image from './images/bilim/product23.jpg';
import product24Image from './images/bilim/product24.jpg';
import product25Image from './images/bilim/product25.jpg';

const products =[
    //Edebiyat
    {
    id : 1,
    no :'İnsan Ne İle Yaşar?',
    author :"Lev Tolstoy",
    pages : 217,
    image : product1Image,
    price:185

    },
    {
        id:2,
        no:'Biri,Hiçbiri, Binlercesi',
        author : 'Luigi Pirandello',
        pages : 257,
        image : product2Image,
        price : 250
    },
    {
        id:3,
        no:"Yalnız Sıkıcı İnsanlar Kahvaltıda Parıldar",
        author:"Oscar Wilde",
        pages:566,
        image :product3Image,
        price:150
    },
    {
        id:4,
        no :"Varenka Olesova",
        author : "Maksim Gorki",
        pages : 250,
        image : product4Image,
        price:200
    },
    {
       id:5,
       no : "Yenilmez Köleciler",
       author : "Karen Blixen",
       pages : 465,
       image : product5Image,
       price:165
    },
    //Felsefe
    {
        id:6,
        no:"Yürümenin Felsefesi",
        author:"Frederic Gros",
        pages:289,
        image:product6Image,
        price:180

    },
    {
        id:7,
        no:"Aşka ve Kadınlara Dair",
        author : "Schopenhauer",
        pages :253,
        image:product7Image,
        price:190
    },
    {
        id:8,
        no:"İrade Terbiyesi",
        author : "Jules Payot",
        pages : 180,
        image : product8Image,
        price:220
    },
    {
        id:9,
        no:"Putların Alacakaranlığı",
        author : "Friedrich Nietzsche",
        pages : 456,
        image : product9Image,
        price:245

    },
    
    {
        id:10,
        no:"Kendime Düşünceler",
        author : "Marcus Aurelius",
        pages : 456,
        image : product10Image,
        price:275

    },
    //Psikoloji
    {
        id:11,
        no:"İyi Hissetmek",
        author : "David Burns",
        pages : 456,
        image : product11Image,
        price:290

    },
    {
        id:12,
        no:"Duyulmayan Anlam Çığlığı",
        author : "Viktor E. Frankl",
        pages : 456,
        image : product12Image,
        price:320

    },
    {
        id:13,
        no:"Beden Kayıt Tutar",
        author : "Bessel van der Kolk",
        pages : 456,
        image : product13Image,
        price:300

    },
    {
        id:14,
        no:"Çocuklukta İhmalin İzi: Boşluk Hissi",
        author : "Jonice Webb",
        pages : 456,
        image : product14Image,
        price:165

    },
    {
        id:15,
        no:"Sevme Sanatı",
        author : "Erich Fromm",
        pages : 456,
        image : product15Image,
        price:200

    },
    //Tarih
    {
        id:16,
        no:"Nutuk",
        author : "Mustafa Kemal Atatürk",
        pages : 456,
        image : product16Image,
        price:350

    },
    {
        id:17,
        no:"Milli Mücadele Tarihi",
        author : "Halil İnalcık ",
        pages : 456,
        image : product17Image,
        price:405

    },
    {
        id:18,
        no:"Türk'ün Ateşle İmtihanı",
        author : "Halide Edib Adıvar",
        pages : 456,
        image : product18Image,
        price:220

    },
    {
        id:19,
        no:"Zeytindağı",
        author : "Falih Rıfkı Atay ",
        pages : 456,
        image : product19Image,
        price:280

    },
    {
        id:20,
        no:"Ortaçağda Kadın",
        author : "Songül Dumlupınar Alican & Tülay Metin",
        pages : 456,
        image : product20Image,
        price:175

    },
    //Bilim
    {
        id:21,
        no:"Zamanın Kısa Tarihi: Büyük Patlamadan Karadeliklere",
        author : "Stephen Hawking",
        pages : 456,
        image : product21Image,
        price:260

    },
    {
        id:22,
        no:"Bilim Devrimcileri",
        author : "Robert P. Crease ",
        pages : 456,
        image : product22Image,
        price:150

    },
    {
        id:23,
        no:"Beyin Senin Hikayen",
        author : "David Eagleman",
        pages : 456,
        image : product23Image,
        price:280

    },
    {
        id:24,
        no:"Çalınan Dikkat",
        author : "Johann Hari ",
        pages : 456,
        image : product24Image,
        price:295

    },
    {
        id:25,
        no:"Olanaksızın Fiziği",
        author : "Michio Kaku ",
        pages : 456,
        image : product25Image,
        price:330

    },

    

   


]

export default products;