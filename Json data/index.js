var arr=[
    {
        name:"Hari",
        roll:"developer",
        languages:"javascript, html , c, python"
    },
    {
        name:"ri",
        roll:"manager",
        languages:"python"
    },
    {
        name:"Ari",
        roll:"FUll stack developer",
        languages:"javascript, html , c, python, ruby"
    }
    
]

arr.forEach(element => {
    if(element.name === "Hari") {
        console.log(element.roll)
    }
    }
)