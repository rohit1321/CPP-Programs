import Country from '#models/country'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class CountrySeeder extends BaseSeeder {
  async run() {
    await Country.createMany(
      [{
        id: 1,
        "name": "Afghanistan",
        phone_code: "93",
        emoji: "U+1F1E6 U+1F1EB",
        native: "افغانستان"
      }, {
        id: 2,
        "name": "Aland Islands",
        phone_code: "+358-18",
        emoji: "U+1F1E6 U+1F1FD",
        native: "Åland"
      }, {
        id: 3,
        "name": "Albania",
        phone_code: "355",
        emoji: "U+1F1E6 U+1F1F1",
        native: "Shqipëria"
      }, {
        id: 4,
        "name": "Algeria",
        phone_code: "213",
        emoji: "U+1F1E9 U+1F1FF",
        native: "الجزائر"
      }, {
        id: 5,
        "name": "American Samoa",
        phone_code: "+1-684",
        emoji: "U+1F1E6 U+1F1F8",
        native: "American Samoa"
      }, {
        id: 6,
        "name": "Andorra",
        phone_code: "376",
        emoji: "U+1F1E6 U+1F1E9",
        native: "Andorra"
      }, {
        id: 7,
        "name": "Angola",
        phone_code: "244",
        emoji: "U+1F1E6 U+1F1F4",
        native: "Angola"
      }, {
        id: 8,
        "name": "Anguilla",
        phone_code: "+1-264",
        emoji: "U+1F1E6 U+1F1EE",
        native: "Anguilla"
      }, {
        id: 9,
        "name": "Antarctica",
        phone_code: "672",
        emoji: "U+1F1E6 U+1F1F6",
        native: "Antarctica"
      }, {
        id: 10,
        "name": "Antigua And Barbuda",
        phone_code: "+1-268",
        emoji: "U+1F1E6 U+1F1EC",
        native: "Antigua and Barbuda"
      }, {
        id: 11,
        "name": "Argentina",
        phone_code: "54",
        emoji: "U+1F1E6 U+1F1F7",
        native: "Argentina"
      }, {
        id: 12,
        "name": "Armenia",
        phone_code: "374",
        emoji: "U+1F1E6 U+1F1F2",
        native: "Հայաստան"
      }, {
        id: 13,
        "name": "Aruba",
        phone_code: "297",
        emoji: "U+1F1E6 U+1F1FC",
        native: "Aruba"
      }, {
        id: 14,
        "name": "Australia",
        phone_code: "61",
        emoji: "U+1F1E6 U+1F1FA",
        native: "Australia"
      }, {
        id: 15,
        "name": "Austria",
        phone_code: "43",
        emoji: "U+1F1E6 U+1F1F9",
        native: "Österreich"
      }, {
        id: 16,
        "name": "Azerbaijan",
        phone_code: "994",
        emoji: "U+1F1E6 U+1F1FF",
        native: "Azərbaycan"
      }, {
        id: 17,
        "name": "Bahrain",
        phone_code: "973",
        emoji: "U+1F1E7 U+1F1ED",
        native: "‏البحرين"
      }, {
        id: 18,
        "name": "Bangladesh",
        phone_code: "880",
        emoji: "U+1F1E7 U+1F1E9",
        native: "Bangladesh"
      }, {
        id: 19,
        "name": "Barbados",
        phone_code: "+1-246",
        emoji: "U+1F1E7 U+1F1E7",
        native: "Barbados"
      }, {
        id: 20,
        "name": "Belarus",
        phone_code: "375",
        emoji: "U+1F1E7 U+1F1FE",
        native: "Белару́сь"
      }, {
        id: 21,
        "name": "Belgium",
        phone_code: "32",
        emoji: "U+1F1E7 U+1F1EA",
        native: "België"
      }, {
        id: 22,
        "name": "Belize",
        phone_code: "501",
        emoji: "U+1F1E7 U+1F1FF",
        native: "Belize"
      }, {
        id: 23,
        "name": "Benin",
        phone_code: "229",
        emoji: "U+1F1E7 U+1F1EF",
        native: "Bénin"
      }, {
        id: 24,
        "name": "Bermuda",
        phone_code: "+1-441",
        emoji: "U+1F1E7 U+1F1F2",
        native: "Bermuda"
      }, {
        id: 25,
        "name": "Bhutan",
        phone_code: "975",
        emoji: "U+1F1E7 U+1F1F9",
        native: "ʼbrug-yul"
      }, {
        id: 26,
        "name": "Bolivia",
        phone_code: "591",
        emoji: "U+1F1E7 U+1F1F4",
        native: "Bolivia"
      }, {
        id: 27,
        "name": "Bonaire, Sint Eustatius and Saba",
        phone_code: "599",
        emoji: "U+1F1E7 U+1F1F6",
        native: "Caribisch Nederland"
      }, {
        id: 28,
        "name": "Bosnia and Herzegovina",
        phone_code: "387",
        emoji: "U+1F1E7 U+1F1E6",
        native: "Bosna i Hercegovina"
      }, {
        id: 29,
        "name": "Botswana",
        phone_code: "267",
        emoji: "U+1F1E7 U+1F1FC",
        native: "Botswana"
      }, {
        id: 30,
        "name": "Bouvet Island",
        phone_code: "0055",
        emoji: "U+1F1E7 U+1F1FB",
        native: "Bouvetøya"
      }, {
        id: 31,
        "name": "Brazil",
        phone_code: "55",
        emoji: "U+1F1E7 U+1F1F7",
        native: "Brasil"
      }, {
        id: 32,
        "name": "British Indian Ocean Territory",
        phone_code: "246",
        emoji: "U+1F1EE U+1F1F4",
        native: "British Indian Ocean Territory"
      }, {
        id: 33,
        "name": "Brunei",
        phone_code: "673",
        emoji: "U+1F1E7 U+1F1F3",
        native: "Negara Brunei Darussalam"
      }, {
        id: 34,
        "name": "Bulgaria",
        phone_code: "359",
        emoji: "U+1F1E7 U+1F1EC",
        native: "България"
      }, {
        id: 35,
        "name": "Burkina Faso",
        phone_code: "226",
        emoji: "U+1F1E7 U+1F1EB",
        native: "Burkina Faso"
      }, {
        id: 36,
        "name": "Burundi",
        phone_code: "257",
        emoji: "U+1F1E7 U+1F1EE",
        native: "Burundi"
      }, {
        id: 37,
        "name": "Cambodia",
        phone_code: "855",
        emoji: "U+1F1F0 U+1F1ED",
        native: "Kâmpŭchéa"
      }, {
        id: 38,
        "name": "Cameroon",
        phone_code: "237",
        emoji: "U+1F1E8 U+1F1F2",
        native: "Cameroon"
      }, {
        id: 39,
        "name": "Canada",
        phone_code: "1",
        emoji: "U+1F1E8 U+1F1E6",
        native: "Canada"
      }, {
        id: 40,
        "name": "Cape Verde",
        phone_code: "238",
        emoji: "U+1F1E8 U+1F1FB",
        native: "Cabo Verde"
      }, {
        id: 41,
        "name": "Cayman Islands",
        phone_code: "+1-345",
        emoji: "U+1F1F0 U+1F1FE",
        native: "Cayman Islands"
      }, {
        id: 42,
        "name": "Central African Republic",
        phone_code: "236",
        emoji: "U+1F1E8 U+1F1EB",
        native: "Ködörösêse tî Bêafrîka"
      }, {
        id: 43,
        "name": "Chad",
        phone_code: "235",
        emoji: "U+1F1F9 U+1F1E9",
        native: "Tchad"
      }, {
        id: 44,
        "name": "Chile",
        phone_code: "56",
        emoji: "U+1F1E8 U+1F1F1",
        native: "Chile"
      }, {
        id: 45,
        "name": "China",
        phone_code: "86",
        emoji: "U+1F1E8 U+1F1F3",
        native: "中国"
      }, {
        id: 46,
        "name": "Christmas Island",
        phone_code: "61",
        emoji: "U+1F1E8 U+1F1FD",
        native: "Christmas Island"
      }, {
        id: 47,
        "name": "Cocos (Keeling) Islands",
        phone_code: "61",
        emoji: "U+1F1E8 U+1F1E8",
        native: "Cocos (Keeling) Islands"
      }, {
        id: 48,
        "name": "Colombia",
        phone_code: "57",
        emoji: "U+1F1E8 U+1F1F4",
        native: "Colombia"
      }, {
        id: 49,
        "name": "Comoros",
        phone_code: "269",
        emoji: "U+1F1F0 U+1F1F2",
        native: "Komori"
      }, {
        id: 50,
        "name": "Congo",
        phone_code: "242",
        emoji: "U+1F1E8 U+1F1EC",
        native: "République du Congo"
      }, {
        id: 51,
        "name": "Cook Islands",
        phone_code: "682",
        emoji: "U+1F1E8 U+1F1F0",
        native: "Cook Islands"
      }, {
        id: 52,
        "name": "Costa Rica",
        phone_code: "506",
        emoji: "U+1F1E8 U+1F1F7",
        native: "Costa Rica"
      }, {
        id: 53,
        "name": "Cote D\\'Ivoire (Ivory Coast)",
        phone_code: "225",
        emoji: "U+1F1E8 U+1F1EE",
        native: ""
      }, {
        id: 54,
        "name": "Croatia",
        phone_code: "385",
        emoji: "U+1F1ED U+1F1F7",
        native: "Hrvatska"
      }, {
        id: 55,
        "name": "Cuba",
        phone_code: "53",
        emoji: "U+1F1E8 U+1F1FA",
        native: "Cuba"
      }, {
        id: 56,
        "name": "Curaçao",
        phone_code: "599",
        emoji: "U+1F1E8 U+1F1FC",
        native: "Curaçao"
      }, {
        id: 57,
        "name": "Cyprus",
        phone_code: "357",
        emoji: "U+1F1E8 U+1F1FE",
        native: "Κύπρος"
      }, {
        id: 58,
        "name": "Czech Republic",
        phone_code: "420",
        emoji: "U+1F1E8 U+1F1FF",
        native: "Česká republika"
      }, {
        id: 59,
        "name": "Democratic Republic of the Congo",
        phone_code: "243",
        emoji: "U+1F1E8 U+1F1E9",
        native: "République démocratique du Congo"
      }, {
        id: 60,
        "name": "Denmark",
        phone_code: "45",
        emoji: "U+1F1E9 U+1F1F0",
        native: "Danmark"
      }, {
        id: 61,
        "name": "Djibouti",
        phone_code: "253",
        emoji: "U+1F1E9 U+1F1EF",
        native: "Djibouti"
      }, {
        id: 62,
        "name": "Dominica",
        phone_code: "+1-767",
        emoji: "U+1F1E9 U+1F1F2",
        native: "Dominica"
      }, {
        id: 63,
        "name": "Dominican Republic",
        phone_code: "+1-809 and 1-829",
        emoji: "U+1F1E9 U+1F1F4",
        native: "República Dominicana"
      }, {
        id: 64,
        "name": "East Timor",
        phone_code: "670",
        emoji: "U+1F1F9 U+1F1F1",
        native: "Timor-Leste"
      }, {
        id: 65,
        "name": "Ecuador",
        phone_code: "593",
        emoji: "U+1F1EA U+1F1E8",
        native: "Ecuador"
      }, {
        id: 66,
        "name": "Egypt",
        phone_code: "20",
        emoji: "U+1F1EA U+1F1EC",
        native: "مصر‎"
      }, {
        id: 67,
        "name": "El Salvador",
        phone_code: "503",
        emoji: "U+1F1F8 U+1F1FB",
        native: "El Salvador"
      }, {
        id: 68,
        "name": "Equatorial Guinea",
        phone_code: "240",
        emoji: "U+1F1EC U+1F1F6",
        native: "Guinea Ecuatorial"
      }, {
        id: 69,
        "name": "Eritrea",
        phone_code: "291",
        emoji: "U+1F1EA U+1F1F7",
        native: "ኤርትራ"
      }, {
        id: 70,
        "name": "Estonia",
        phone_code: "372",
        emoji: "U+1F1EA U+1F1EA",
        native: "Eesti"
      }, {
        id: 71,
        "name": "Ethiopia",
        phone_code: "251",
        emoji: "U+1F1EA U+1F1F9",
        native: "ኢትዮጵያ"
      }, {
        id: 72,
        "name": "Falkland Islands",
        phone_code: "500",
        emoji: "U+1F1EB U+1F1F0",
        native: "Falkland Islands"
      }, {
        id: 73,
        "name": "Faroe Islands",
        phone_code: "298",
        emoji: "U+1F1EB U+1F1F4",
        native: "Føroyar"
      }, {
        id: 74,
        "name": "Fiji Islands",
        phone_code: "679",
        emoji: "U+1F1EB U+1F1EF",
        native: "Fiji"
      }, {
        id: 75,
        "name": "Finland",
        phone_code: "358",
        emoji: "U+1F1EB U+1F1EE",
        native: "Suomi"
      }, {
        id: 76,
        "name": "France",
        phone_code: "33",
        emoji: "U+1F1EB U+1F1F7",
        native: "France"
      }, {
        id: 77,
        "name": "French Guiana",
        phone_code: "594",
        emoji: "U+1F1EC U+1F1EB",
        native: "Guyane française"
      }, {
        id: 78,
        "name": "French Polynesia",
        phone_code: "689",
        emoji: "U+1F1F5 U+1F1EB",
        native: "Polynésie française"
      }, {
        id: 79,
        "name": "French Southern Territories",
        phone_code: "262",
        emoji: "U+1F1F9 U+1F1EB",
        native: "Territoire des Terres australes et antarctiques fr"
      }, {
        id: 80,
        "name": "Gabon",
        phone_code: "241",
        emoji: "U+1F1EC U+1F1E6",
        native: "Gabon"
      }, {
        id: 81,
        "name": "Gambia The",
        phone_code: "220",
        emoji: "U+1F1EC U+1F1F2",
        native: "Gambia"
      }, {
        id: 82,
        "name": "Georgia",
        phone_code: "995",
        emoji: "U+1F1EC U+1F1EA",
        native: "საქართველო"
      }, {
        id: 83,
        "name": "Germany",
        phone_code: "49",
        emoji: "U+1F1E9 U+1F1EA",
        native: "Deutschland"
      }, {
        id: 84,
        "name": "Ghana",
        phone_code: "233",
        emoji: "U+1F1EC U+1F1ED",
        native: "Ghana"
      }, {
        id: 85,
        "name": "Gibraltar",
        phone_code: "350",
        emoji: "U+1F1EC U+1F1EE",
        native: "Gibraltar"
      }, {
        id: 86,
        "name": "Greece",
        phone_code: "30",
        emoji: "U+1F1EC U+1F1F7",
        native: "Ελλάδα"
      }, {
        id: 87,
        "name": "Greenland",
        phone_code: "299",
        emoji: "U+1F1EC U+1F1F1",
        native: "Kalaallit Nunaat"
      }, {
        id: 88,
        "name": "Grenada",
        phone_code: "+1-473",
        emoji: "U+1F1EC U+1F1E9",
        native: "Grenada"
      }, {
        id: 89,
        "name": "Guadeloupe",
        phone_code: "590",
        emoji: "U+1F1EC U+1F1F5",
        native: "Guadeloupe"
      }, {
        id: 90,
        "name": "Guam",
        phone_code: "+1-671",
        emoji: "U+1F1EC U+1F1FA",
        native: "Guam"
      }, {
        id: 91,
        "name": "Guatemala",
        phone_code: "502",
        emoji: "U+1F1EC U+1F1F9",
        native: "Guatemala"
      }, {
        id: 92,
        "name": "Guernsey and Alderney",
        phone_code: "+44-1481",
        emoji: "U+1F1EC U+1F1EC",
        native: "Guernsey"
      }, {
        id: 93,
        "name": "Guinea",
        phone_code: "224",
        emoji: "U+1F1EC U+1F1F3",
        native: "Guinée"
      }, {
        id: 94,
        "name": "Guinea-Bissau",
        phone_code: "245",
        emoji: "U+1F1EC U+1F1FC",
        native: "Guiné-Bissau"
      }, {
        id: 95,
        "name": "Guyana",
        phone_code: "592",
        emoji: "U+1F1EC U+1F1FE",
        native: "Guyana"
      }, {
        id: 96,
        "name": "Haiti",
        phone_code: "509",
        emoji: "U+1F1ED U+1F1F9",
        native: "Haïti"
      }, {
        id: 97,
        "name": "Heard Island and McDonald Islands",
        phone_code: "672",
        emoji: "U+1F1ED U+1F1F2",
        native: "Heard Island and McDonald Islands"
      }, {
        id: 98,
        "name": "Honduras",
        phone_code: "504",
        emoji: "U+1F1ED U+1F1F3",
        native: "Honduras"
      }, {
        id: 99,
        "name": "Hong Kong S.A.R.",
        phone_code: "852",
        emoji: "U+1F1ED U+1F1F0",
        native: "香港"
      }, {
        id: 100,
        "name": "Hungary",
        phone_code: "36",
        emoji: "U+1F1ED U+1F1FA",
        native: "Magyarország"
      }, {
        id: 101,
        "name": "Iceland",
        phone_code: "354",
        emoji: "U+1F1EE U+1F1F8",
        native: "Ísland"
      }, {
        id: 102,
        "name": "India",
        phone_code: "91",
        emoji: "U+1F1EE U+1F1F3",
        native: "भारत"
      }, {
        id: 103,
        "name": "Indonesia",
        phone_code: "62",
        emoji: "U+1F1EE U+1F1E9",
        native: "Indonesia"
      }, {
        id: 104,
        "name": "Iran",
        phone_code: "98",
        emoji: "U+1F1EE U+1F1F7",
        native: "ایران"
      }, {
        id: 105,
        "name": "Iraq",
        phone_code: "964",
        emoji: "U+1F1EE U+1F1F6",
        native: "العراق"
      }, {
        id: 106,
        "name": "Ireland",
        phone_code: "353",
        emoji: "U+1F1EE U+1F1EA",
        native: "Éire"
      }, {
        id: 107,
        "name": "Israel",
        phone_code: "972",
        emoji: "U+1F1EE U+1F1F1",
        native: "יִשְׂרָאֵל"
      }, {
        id: 108,
        "name": "Italy",
        phone_code: "39",
        emoji: "U+1F1EE U+1F1F9",
        native: "Italia"
      }, {
        id: 109,
        "name": "Jamaica",
        phone_code: "+1-876",
        emoji: "U+1F1EF U+1F1F2",
        native: "Jamaica"
      }, {
        id: 110,
        "name": "Japan",
        phone_code: "81",
        emoji: "U+1F1EF U+1F1F5",
        native: "日本"
      }, {
        id: 111,
        "name": "Jersey",
        phone_code: "+44-1534",
        emoji: "U+1F1EF U+1F1EA",
        native: "Jersey"
      }, {
        id: 112,
        "name": "Jordan",
        phone_code: "962",
        emoji: "U+1F1EF U+1F1F4",
        native: "الأردن"
      }, {
        id: 113,
        "name": "Kazakhstan",
        phone_code: "7",
        emoji: "U+1F1F0 U+1F1FF",
        native: "Қазақстан"
      }, {
        id: 114,
        "name": "Kenya",
        phone_code: "254",
        emoji: "U+1F1F0 U+1F1EA",
        native: "Kenya"
      }, {
        id: 115,
        "name": "Kiribati",
        phone_code: "686",
        emoji: "U+1F1F0 U+1F1EE",
        native: "Kiribati"
      }, {
        id: 116,
        "name": "Kosovo",
        phone_code: "383",
        emoji: "U+1F1FD U+1F1F0",
        native: "Republika e Kosovës"
      }, {
        id: 117,
        "name": "Kuwait",
        phone_code: "965",
        emoji: "U+1F1F0 U+1F1FC",
        native: "الكويت"
      }, {
        id: 118,
        "name": "Kyrgyzstan",
        phone_code: "996",
        emoji: "U+1F1F0 U+1F1EC",
        native: "Кыргызстан"
      }, {
        id: 119,
        "name": "Laos",
        phone_code: "856",
        emoji: "U+1F1F1 U+1F1E6",
        native: "ສປປລາວ"
      }, {
        id: 120,
        "name": "Latvia",
        phone_code: "371",
        emoji: "U+1F1F1 U+1F1FB",
        native: "Latvija"
      }, {
        id: 121,
        "name": "Lebanon",
        phone_code: "961",
        emoji: "U+1F1F1 U+1F1E7",
        native: "لبنان"
      }, {
        id: 122,
        "name": "Lesotho",
        phone_code: "266",
        emoji: "U+1F1F1 U+1F1F8",
        native: "Lesotho"
      }, {
        id: 123,
        "name": "Liberia",
        phone_code: "231",
        emoji: "U+1F1F1 U+1F1F7",
        native: "Liberia"
      }, {
        id: 124,
        "name": "Libya",
        phone_code: "218",
        emoji: "U+1F1F1 U+1F1FE",
        native: "‏ليبيا"
      }, {
        id: 125,
        "name": "Liechtenstein",
        phone_code: "423",
        emoji: "U+1F1F1 U+1F1EE",
        native: "Liechtenstein"
      }, {
        id: 126,
        "name": "Lithuania",
        phone_code: "370",
        emoji: "U+1F1F1 U+1F1F9",
        native: "Lietuva"
      }, {
        id: 127,
        "name": "Luxembourg",
        phone_code: "352",
        emoji: "U+1F1F1 U+1F1FA",
        native: "Luxembourg"
      }, {
        id: 128,
        "name": "Macau S.A.R.",
        phone_code: "853",
        emoji: "U+1F1F2 U+1F1F4",
        native: "澳門"
      }, {
        id: 129,
        "name": "Madagascar",
        phone_code: "261",
        emoji: "U+1F1F2 U+1F1EC",
        native: "Madagasikara"
      }, {
        id: 130,
        "name": "Malawi",
        phone_code: "265",
        emoji: "U+1F1F2 U+1F1FC",
        native: "Malawi"
      }, {
        id: 131,
        "name": "Malaysia",
        phone_code: "60",
        emoji: "U+1F1F2 U+1F1FE",
        native: "Malaysia"
      }, {
        id: 132,
        "name": "Maldives",
        phone_code: "960",
        emoji: "U+1F1F2 U+1F1FB",
        native: "Maldives"
      }, {
        id: 133,
        "name": "Mali",
        phone_code: "223",
        emoji: "U+1F1F2 U+1F1F1",
        native: "Mali"
      }, {
        id: 134,
        "name": "Malta",
        phone_code: "356",
        emoji: "U+1F1F2 U+1F1F9",
        native: "Malta"
      }, {
        id: 135,
        "name": "Man (Isle of)",
        phone_code: "+44-1624",
        emoji: "U+1F1EE U+1F1F2",
        native: "Isle of Man"
      }, {
        id: 136,
        "name": "Marshall Islands",
        phone_code: "692",
        emoji: "U+1F1F2 U+1F1ED",
        native: "M̧ajeļ"
      }, {
        id: 137,
        "name": "Martinique",
        phone_code: "596",
        emoji: "U+1F1F2 U+1F1F6",
        native: "Martinique"
      }, {
        id: 138,
        "name": "Mauritania",
        phone_code: "222",
        emoji: "U+1F1F2 U+1F1F7",
        native: "موريتانيا"
      }, {
        id: 139,
        "name": "Mauritius",
        phone_code: "230",
        emoji: "U+1F1F2 U+1F1FA",
        native: "Maurice"
      }, {
        id: 140,
        "name": "Mayotte",
        phone_code: "262",
        emoji: "U+1F1FE U+1F1F9",
        native: "Mayotte"
      }, {
        id: 141,
        "name": "Mexico",
        phone_code: "52",
        emoji: "U+1F1F2 U+1F1FD",
        native: "México"
      }, {
        id: 142,
        "name": "Micronesia",
        phone_code: "691",
        emoji: "U+1F1EB U+1F1F2",
        native: "Micronesia"
      }, {
        id: 143,
        "name": "Moldova",
        phone_code: "373",
        emoji: "U+1F1F2 U+1F1E9",
        native: "Moldova"
      }, {
        id: 144,
        "name": "Monaco",
        phone_code: "377",
        emoji: "U+1F1F2 U+1F1E8",
        native: "Monaco"
      }, {
        id: 145,
        "name": "Mongolia",
        phone_code: "976",
        emoji: "U+1F1F2 U+1F1F3",
        native: "Монгол улс"
      }, {
        id: 146,
        "name": "Montenegro",
        phone_code: "382",
        emoji: "U+1F1F2 U+1F1EA",
        native: "Црна Гора"
      }, {
        id: 147,
        "name": "Montserrat",
        phone_code: "+1-664",
        emoji: "U+1F1F2 U+1F1F8",
        native: "Montserrat"
      }, {
        id: 148,
        "name": "Morocco",
        phone_code: "212",
        emoji: "U+1F1F2 U+1F1E6",
        native: "المغرب"
      }, {
        id: 149,
        "name": "Mozambique",
        phone_code: "258",
        emoji: "U+1F1F2 U+1F1FF",
        native: "Moçambique"
      }, {
        id: 150,
        "name": "Myanmar",
        phone_code: "95",
        emoji: "U+1F1F2 U+1F1F2",
        native: "မြန်မာ"
      }, {
        id: 151,
        "name": "Namibia",
        phone_code: "264",
        emoji: "U+1F1F3 U+1F1E6",
        native: "Namibia"
      }, {
        id: 152,
        "name": "Nauru",
        phone_code: "674",
        emoji: "U+1F1F3 U+1F1F7",
        native: "Nauru"
      }, {
        id: 153,
        "name": "Nepal",
        phone_code: "977",
        emoji: "U+1F1F3 U+1F1F5",
        native: "नपल"
      }, {
        id: 154,
        "name": "Netherlands",
        phone_code: "31",
        emoji: "U+1F1F3 U+1F1F1",
        native: "Nederland"
      }, {
        id: 155,
        "name": "New Caledonia",
        phone_code: "687",
        emoji: "U+1F1F3 U+1F1E8",
        native: "Nouvelle-Calédonie"
      }, {
        id: 156,
        "name": "New Zealand",
        phone_code: "64",
        emoji: "U+1F1F3 U+1F1FF",
        native: "New Zealand"
      }, {
        id: 157,
        "name": "Nicaragua",
        phone_code: "505",
        emoji: "U+1F1F3 U+1F1EE",
        native: "Nicaragua"
      }, {
        id: 158,
        "name": "Niger",
        phone_code: "227",
        emoji: "U+1F1F3 U+1F1EA",
        native: "Niger"
      }, {
        id: 159,
        "name": "Nigeria",
        phone_code: "234",
        emoji: "U+1F1F3 U+1F1EC",
        native: "Nigeria"
      }, {
        id: 160,
        "name": "Niue",
        phone_code: "683",
        emoji: "U+1F1F3 U+1F1FA",
        native: "Niuē"
      }, {
        id: 161,
        "name": "Norfolk Island",
        phone_code: "672",
        emoji: "U+1F1F3 U+1F1EB",
        native: "Norfolk Island"
      }, {
        id: 162,
        "name": "North Korea",
        phone_code: "850",
        emoji: "U+1F1F0 U+1F1F5",
        native: "북한"
      }, {
        id: 163,
        "name": "North Macedonia",
        phone_code: "389",
        emoji: "U+1F1F2 U+1F1F0",
        native: "Северна Македонија"
      }, {
        id: 164,
        "name": "Northern Mariana Islands",
        phone_code: "+1-670",
        emoji: "U+1F1F2 U+1F1F5",
        native: "Northern Mariana Islands"
      }, {
        id: 165,
        "name": "Norway",
        phone_code: "47",
        emoji: "U+1F1F3 U+1F1F4",
        native: "Norge"
      }, {
        id: 166,
        "name": "Oman",
        phone_code: "968",
        emoji: "U+1F1F4 U+1F1F2",
        native: "عمان"
      }, {
        id: 167,
        "name": "Pakistan",
        phone_code: "92",
        emoji: "U+1F1F5 U+1F1F0",
        native: "Pakistan"
      }, {
        id: 168,
        "name": "Palau",
        phone_code: "680",
        emoji: "U+1F1F5 U+1F1FC",
        native: "Palau"
      }, {
        id: 169,
        "name": "Palestinian Territory Occupied",
        phone_code: "970",
        emoji: "U+1F1F5 U+1F1F8",
        native: "فلسطين"
      }, {
        id: 170,
        "name": "Panama",
        phone_code: "507",
        emoji: "U+1F1F5 U+1F1E6",
        native: "Panamá"
      }, {
        id: 171,
        "name": "Papua new Guinea",
        phone_code: "675",
        emoji: "U+1F1F5 U+1F1EC",
        native: "Papua Niugini"
      }, {
        id: 172,
        "name": "Paraguay",
        phone_code: "595",
        emoji: "U+1F1F5 U+1F1FE",
        native: "Paraguay"
      }, {
        id: 173,
        "name": "Peru",
        phone_code: "51",
        emoji: "U+1F1F5 U+1F1EA",
        native: "Perú"
      }, {
        id: 174,
        "name": "Philippines",
        phone_code: "63",
        emoji: "U+1F1F5 U+1F1ED",
        native: "Pilipinas"
      }, {
        id: 175,
        "name": "Pitcairn Island",
        phone_code: "870",
        emoji: "U+1F1F5 U+1F1F3",
        native: "Pitcairn Islands"
      }, {
        id: 176,
        "name": "Poland",
        phone_code: "48",
        emoji: "U+1F1F5 U+1F1F1",
        native: "Polska"
      }, {
        id: 177,
        "name": "Portugal",
        phone_code: "351",
        emoji: "U+1F1F5 U+1F1F9",
        native: "Portugal"
      }, {
        id: 178,
        "name": "Puerto Rico",
        phone_code: "+1-787 and 1-939",
        emoji: "U+1F1F5 U+1F1F7",
        native: "Puerto Rico"
      }, {
        id: 179,
        "name": "Qatar",
        phone_code: "974",
        emoji: "U+1F1F6 U+1F1E6",
        native: "قطر"
      }, {
        id: 180,
        "name": "Reunion",
        phone_code: "262",
        emoji: "U+1F1F7 U+1F1EA",
        native: "La Réunion"
      }, {
        id: 181,
        "name": "Romania",
        phone_code: "40",
        emoji: "U+1F1F7 U+1F1F4",
        native: "România"
      }, {
        id: 182,
        "name": "Russia",
        phone_code: "7",
        emoji: "U+1F1F7 U+1F1FA",
        native: "Россия"
      }, {
        id: 183,
        "name": "Rwanda",
        phone_code: "250",
        emoji: "U+1F1F7 U+1F1FC",
        native: "Rwanda"
      }, {
        id: 184,
        "name": "Saint Helena",
        phone_code: "290",
        emoji: "U+1F1F8 U+1F1ED",
        native: "Saint Helena"
      }, {
        id: 185,
        "name": "Saint Kitts And Nevis",
        phone_code: "+1-869",
        emoji: "U+1F1F0 U+1F1F3",
        native: "Saint Kitts and Nevis"
      }, {
        id: 186,
        "name": "Saint Lucia",
        phone_code: "+1-758",
        emoji: "U+1F1F1 U+1F1E8",
        native: "Saint Lucia"
      }, {
        id: 187,
        "name": "Saint Pierre and Miquelon",
        phone_code: "508",
        emoji: "U+1F1F5 U+1F1F2",
        native: "Saint-Pierre-et-Miquelon"
      }, {
        id: 188,
        "name": "Saint Vincent And The Grenadines",
        phone_code: "+1-784",
        emoji: "U+1F1FB U+1F1E8",
        native: "Saint Vincent and the Grenadines"
      }, {
        id: 189,
        "name": "Saint-Barthelemy",
        phone_code: "590",
        emoji: "U+1F1E7 U+1F1F1",
        native: "Saint-Barthélemy"
      }, {
        id: 190,
        "name": "Saint-Martin (French part)",
        phone_code: "590",
        emoji: "U+1F1F2 U+1F1EB",
        native: "Saint-Martin"
      }, {
        id: 191,
        "name": "Samoa",
        phone_code: "685",
        emoji: "U+1F1FC U+1F1F8",
        native: "Samoa"
      }, {
        id: 192,
        "name": "San Marino",
        phone_code: "378",
        emoji: "U+1F1F8 U+1F1F2",
        native: "San Marino"
      }, {
        id: 193,
        "name": "Sao Tome and Principe",
        phone_code: "239",
        emoji: "U+1F1F8 U+1F1F9",
        native: "São Tomé e Príncipe"
      }, {
        id: 194,
        "name": "Saudi Arabia",
        phone_code: "966",
        emoji: "U+1F1F8 U+1F1E6",
        native: "المملكة العربية السعودية"
      }, {
        id: 195,
        "name": "Senegal",
        phone_code: "221",
        emoji: "U+1F1F8 U+1F1F3",
        native: "Sénégal"
      }, {
        id: 196,
        "name": "Serbia",
        phone_code: "381",
        emoji: "U+1F1F7 U+1F1F8",
        native: "Србија"
      }, {
        id: 197,
        "name": "Seychelles",
        phone_code: "248",
        emoji: "U+1F1F8 U+1F1E8",
        native: "Seychelles"
      }, {
        id: 198,
        "name": "Sierra Leone",
        phone_code: "232",
        emoji: "U+1F1F8 U+1F1F1",
        native: "Sierra Leone"
      }, {
        id: 199,
        "name": "Singapore",
        phone_code: "65",
        emoji: "U+1F1F8 U+1F1EC",
        native: "Singapore"
      }, {
        id: 200,
        "name": "Sint Maarten (Dutch part)",
        phone_code: "1721",
        emoji: "U+1F1F8 U+1F1FD",
        native: "Sint Maarten"
      }, {
        id: 201,
        "name": "Slovakia",
        phone_code: "421",
        emoji: "U+1F1F8 U+1F1F0",
        native: "Slovensko"
      }, {
        id: 202,
        "name": "Slovenia",
        phone_code: "386",
        emoji: "U+1F1F8 U+1F1EE",
        native: "Slovenija"
      }, {
        id: 203,
        "name": "Solomon Islands",
        phone_code: "677",
        emoji: "U+1F1F8 U+1F1E7",
        native: "Solomon Islands"
      }, {
        id: 204,
        "name": "Somalia",
        phone_code: "252",
        emoji: "U+1F1F8 U+1F1F4",
        native: "Soomaaliya"
      }, {
        id: 205,
        "name": "South Africa",
        phone_code: "27",
        emoji: "U+1F1FF U+1F1E6",
        native: "South Africa"
      }, {
        id: 206,
        "name": "South Georgia",
        phone_code: "500",
        emoji: "U+1F1EC U+1F1F8",
        native: "South Georgia"
      }, {
        id: 207,
        "name": "South Korea",
        phone_code: "82",
        emoji: "U+1F1F0 U+1F1F7",
        native: "대한민국"
      }, {
        id: 208,
        "name": "South Sudan",
        phone_code: "211",
        emoji: "U+1F1F8 U+1F1F8",
        native: "South Sudan"
      }, {
        id: 209,
        "name": "Spain",
        phone_code: "34",
        emoji: "U+1F1EA U+1F1F8",
        native: "España"
      }, {
        id: 210,
        "name": "Sri Lanka",
        phone_code: "94",
        emoji: "U+1F1F1 U+1F1F0",
        native: "śrī laṃkāva"
      }, {
        id: 211,
        "name": "Sudan",
        phone_code: "249",
        emoji: "U+1F1F8 U+1F1E9",
        native: "السودان"
      }, {
        id: 212,
        "name": "Suriname",
        phone_code: "597",
        emoji: "U+1F1F8 U+1F1F7",
        native: "Suriname"
      }, {
        id: 213,
        "name": "Svalbard And Jan Mayen Islands",
        phone_code: "47",
        emoji: "U+1F1F8 U+1F1EF",
        native: "Svalbard og Jan Mayen"
      }, {
        id: 214,
        "name": "Swaziland",
        phone_code: "268",
        emoji: "U+1F1F8 U+1F1FF",
        native: "Swaziland"
      }, {
        id: 215,
        "name": "Sweden",
        phone_code: "46",
        emoji: "U+1F1F8 U+1F1EA",
        native: "Sverige"
      }, {
        id: 216,
        "name": "Switzerland",
        phone_code: "41",
        emoji: "U+1F1E8 U+1F1ED",
        native: "Schweiz"
      }, {
        id: 217,
        "name": "Syria",
        phone_code: "963",
        emoji: "U+1F1F8 U+1F1FE",
        native: "سوريا"
      }, {
        id: 218,
        "name": "Taiwan",
        phone_code: "886",
        emoji: "U+1F1F9 U+1F1FC",
        native: "臺灣"
      }, {
        id: 219,
        "name": "Tajikistan",
        phone_code: "992",
        emoji: "U+1F1F9 U+1F1EF",
        native: "Тоҷикистон"
      }, {
        id: 220,
        "name": "Tanzania",
        phone_code: "255",
        emoji: "U+1F1F9 U+1F1FF",
        native: "Tanzania"
      }, {
        id: 221,
        "name": "Thailand",
        phone_code: "66",
        emoji: "U+1F1F9 U+1F1ED",
        native: "ประเทศไทย"
      }, {
        id: 222,
        "name": "The Bahamas",
        phone_code: "+1-242",
        emoji: "U+1F1E7 U+1F1F8",
        native: "Bahamas"
      }, {
        id: 223,
        "name": "Togo",
        phone_code: "228",
        emoji: "U+1F1F9 U+1F1EC",
        native: "Togo"
      }, {
        id: 224,
        "name": "Tokelau",
        phone_code: "690",
        emoji: "U+1F1F9 U+1F1F0",
        native: "Tokelau"
      }, {
        id: 225,
        "name": "Tonga",
        phone_code: "676",
        emoji: "U+1F1F9 U+1F1F4",
        native: "Tonga"
      }, {
        id: 226,
        "name": "Trinidad And Tobago",
        phone_code: "+1-868",
        emoji: "U+1F1F9 U+1F1F9",
        native: "Trinidad and Tobago"
      }, {
        id: 227,
        "name": "Tunisia",
        phone_code: "216",
        emoji: "U+1F1F9 U+1F1F3",
        native: "تونس"
      }, {
        id: 228,
        "name": "Turkey",
        phone_code: "90",
        emoji: "U+1F1F9 U+1F1F7",
        native: "Türkiye"
      }, {
        id: 229,
        "name": "Turkmenistan",
        phone_code: "993",
        emoji: "U+1F1F9 U+1F1F2",
        native: "Türkmenistan"
      }, {
        id: 230,
        "name": "Turks And Caicos Islands",
        phone_code: "+1-649",
        emoji: "U+1F1F9 U+1F1E8",
        native: "Turks and Caicos Islands"
      }, {
        id: 231,
        "name": "Tuvalu",
        phone_code: "688",
        emoji: "U+1F1F9 U+1F1FB",
        native: "Tuvalu"
      }, {
        id: 232,
        "name": "Uganda",
        phone_code: "256",
        emoji: "U+1F1FA U+1F1EC",
        native: "Uganda"
      }, {
        id: 233,
        "name": "Ukraine",
        phone_code: "380",
        emoji: "U+1F1FA U+1F1E6",
        native: "Україна"
      }, {
        id: 234,
        "name": "United Arab Emirates",
        phone_code: "971",
        emoji: "U+1F1E6 U+1F1EA",
        native: "دولة الإمارات العربية المتحدة"
      }, {
        id: 235,
        "name": "United Kingdom",
        phone_code: "44",
        emoji: "U+1F1EC U+1F1E7",
        native: "United Kingdom"
      }, {
        id: 236,
        "name": "United States",
        phone_code: "1",
        emoji: "U+1F1FA U+1F1F8",
        native: "United States"
      }, {
        id: 237,
        "name": "United States Minor Outlying Islands",
        phone_code: "1",
        emoji: "U+1F1FA U+1F1F2",
        native: "United States Minor Outlying Islands"
      }, {
        id: 238,
        "name": "Uruguay",
        phone_code: "598",
        emoji: "U+1F1FA U+1F1FE",
        native: "Uruguay"
      }, {
        id: 239,
        "name": "Uzbekistan",
        phone_code: "998",
        emoji: "U+1F1FA U+1F1FF",
        native: "O‘zbekiston"
      }, {
        id: 240,
        "name": "Vanuatu",
        phone_code: "678",
        emoji: "U+1F1FB U+1F1FA",
        native: "Vanuatu"
      }, {
        id: 241,
        "name": "Vatican City State (Holy See)",
        phone_code: "379",
        emoji: "U+1F1FB U+1F1E6",
        native: "Vaticano"
      }, {
        id: 242,
        "name": "Venezuela",
        phone_code: "58",
        emoji: "U+1F1FB U+1F1EA",
        native: "Venezuela"
      }, {
        id: 243,
        "name": "Vietnam",
        phone_code: "84",
        emoji: "U+1F1FB U+1F1F3",
        native: "Việt Nam"
      }, {
        id: 244,
        "name": "Virgin Islands (British)",
        phone_code: "+1-284",
        emoji: "U+1F1FB U+1F1EC",
        native: "British Virgin Islands"
      }, {
        id: 245,
        "name": "Virgin Islands (US)",
        phone_code: "+1-340",
        emoji: "U+1F1FB U+1F1EE",
        native: "United States Virgin Islands"
      }, {
        id: 246,
        "name": "Wallis And Futuna Islands",
        phone_code: "681",
        emoji: "U+1F1FC U+1F1EB",
        native: "Wallis et Futuna"
      }, {
        id: 247,
        "name": "Western Sahara",
        phone_code: "212",
        emoji: "U+1F1EA U+1F1ED",
        native: "الصحراء الغربية"
      }, {
        id: 248,
        "name": "Yemen",
        phone_code: "967",
        emoji: "U+1F1FE U+1F1EA",
        native: "اليَمَن"
      }, {
        id: 249,
        "name": "Zambia",
        phone_code: "260",
        emoji: "U+1F1FF U+1F1F2",
        native: "Zambia"
      }, {
        id: 250,
        "name": "Zimbabwe",
        phone_code: "263",
        emoji: "U+1F1FF U+1F1FC",
        native: "Zimbabwe"
      }]
    )
    
  }
}