![Image](./src/assets/images/MarchioCompleto.png)

# EndoStats
App created to support and help the work of [Endocare Onlus](https://www.endo-care.it/).
</br></br>

## Description
This app is meant to read data from a specific excell file and separate/organize them in different and specific tables.</br>
This app is not meant to alter the data inside the excell but only to visualize it in an easier way.</br>

There are 3 different tables:
- #### Gruppo multidisciplinare (G)
|Riga|Nome|Cognome|Data ins.|Diagnosi|
|:------:|:------:|:------:|:------:|:------:|
|`number`|`string`|`string`|`string`|`string`|

- #### Ambulatorio (A)
|Riga|Nome|Cognome|Data ins.|Diagnosi|N° tel.|
|:------:|:------:|:------:|:------:|:------:|:------:|
|`number`|`string`|`string`|`string`|`string`|`string`|

- #### Da valutare (?)
|Riga|Nome|Cognome|Data ins.|Diagnosi|
|:------:|:------:|:------:|:------:|:------:|
|`number`|`string`|`string`|`string`|`string`|

</br>

>**NOTE:** Every table has the possibility to open each row's details and show more data.

</br>

## Building
If it's the first time you are cloning this repository run `npm install`.</br>
To start the app for development use the command `npm run start`. The app should start without problems.

To build the app for production use the command `npm run build`, a dist/ folder will be created in the root folder.

>**NOTE:** Every configuration about these commands can be changed in the _package.json_ file.

</br>

## Contributing
Any help is well accepted, make a pull request and you are on track!
</br></br>

## Forking
If you find this repo of some use feel free to fork!
</br></br>