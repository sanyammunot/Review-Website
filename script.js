(function() {
    const customerImage = document.querySelector('#customer-img')
    const customerName = document.querySelector('#customer-name')
    const customerText = document.querySelector('#customer-text')
    
    const btn = document.querySelectorAll('.btn')
    let index = 0
    const customers = []

    function Customer(img,name,text) {
        this.img = img
        this.name = name
        this.text = text
    }

    function createCustomer(img, name, text) {
        let Img = `./img/${img}.jpeg`
        let customer = new Customer(Img, name, text)
    
        customers.push(customer)
    }
    

    createCustomer(0,'John', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor dignissimos distinctio sapiente tenetur odit omnis fuga nulla enim explicabo ipsum?')
    createCustomer(1,'Wanda', 'Lo sit amet consectetur adipisicing elit. Dolor dignissimos distinctio sapiente tenetur odit omnis fuga nulla enim explicabo ipsum?')
    createCustomer(2,'Gian', 'Lom ipsum dolor, sit amet consectetur adipisicing elit. Dolor dignissimos distinctio sapiente tenetur odit omnis fuga nulla enim explicabo ipsum?')
    createCustomer(3,'Babita', 'Lorem dolor, sit amet consectetur adipisicing elit. Dolor dignissimos distinctio sapiente tenetur odit omnis fuga nulla enim explicabo ipsum?')
    createCustomer(4,'Masakali', 'etur adipisicing elit. Dolor dignissimos distinctio sapiente tenetur odit omnis fuga nulla enim explicabo ipsum?')
    createCustomer(5,'Vision', 'Lorem ipsum dolor,ectetur adipisicing elit. Dolor dignissimos distinctio sapiente tenetur odit omnis fuga nulla enim explicabo ipsum?')

    btn.forEach(function(button) {
        button.addEventListener('click',function(e) {
            if (e.target.parentElement.classList.contains('prevBtn')) {
                if(index === 0) {
                    index = customers.length
                }
                else {
                    index--
                }
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }

            if (e.target.parentElement.classList.contains('nextBtn')) {
                if(index === customers.length) {
                    index = 0
                }
                else {
                    index++
                }
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }
        })
    })

})()