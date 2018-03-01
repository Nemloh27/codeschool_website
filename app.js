(function () {
    var app = angular.module("store", ["store-products"]);
    

    
    app.controller("storeController", ['$http', function ($http) {
        var store = this;
        
        store.products = [ ];
        
        $http.get('/product.json').success(function(data){
            store.products = data;
        });
        
    }]);
            
    var gems = [
        {
            name: "Dodecahedron",
            price: 2.95,
            description: "best friggen thing ever",
            canPurchase: true,
            images: [
                "http://heliogabalo.github.io/images/gem-02.gif",             "http://heliogabalo.github.io/images/gem-05.gif",
                "http://heliogabalo.github.io/images/gem-09.gif"
            ],
            reviews: [{
                stars: "5",
                body: "Best product ever invented",
                author: "e1.holmen@gmail.com"
            }, {
                stars: "1",
                body: "This product sucks",
                author: "e1.holmen@gmail.com"
            }],
        }, {
            name: "Pentagonal Gem",
            price: 5.95,
            description: "Not as cool as Alexandrite",
            canPurchase: true,
            images: [
                "http://heliogabalo.github.io/images/gem-01.gif",               "http://heliogabalo.github.io/images/gem-03.gif",
                "http://heliogabalo.github.io/images/gem-04.gif"
            ],
            reviews: [{
                stars: "5",
                body: "Best product ever invented",
                author: "e1.holmen@gmail.com"
                }, {
                stars: "1",
                body: "This product sucks",
                author: "e1.holmen@gmail.com"
            }],
        }
    ];
})();