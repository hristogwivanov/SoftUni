function foreignLanguage(country){
    let language="unknown";
switch(country){
    case "England":
    case "USA": language="English"; break;
    case "Spain":
    case "Argentina":
    case "Mexico": language="Spanish";
}
console.log(language);

}

foreignLanguage('USA')
foreignLanguage('Germany')