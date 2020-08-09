let helloObj = {

    hello: () => {
        console.log(this);
    },
    hi: function () {
        console.log(this);
    },
    nice: function () {
        const how = () => { console.log(this); }
        how();
    }
}

helloObj.hello()
helloObj.hi()
helloObj.nice()