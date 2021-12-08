window.addEventListener("DOMContentLoaded", function () {

    let data = window.catalog;
    let filter = document.getElementsByClassName("catalog-filter")[0];
    let mobileFilter = document.getElementsByClassName("filter-list-mobile")[0];
    let items = document.getElementsByClassName("items-wrap")[0];
    let showMore = document.getElementsByClassName("catalog-btn")[0];

    function sortByDate(a, b) {
        return new Date(b.dateAdded) - new Date(a.dateAdded);
    }
    let newData = data.filter(item => item.category === "women" && item.fashion === "Casual style")
    newData.sort(sortByDate);
    data.sort(sortByDate);
    
    filter.addEventListener("click", function (e) {
        let target = e.target;
        if (!target.classList.contains("sub-list-item")) return;
        let parentList = target.parentElement.parentElement; 
        let parentListHtml = parentList.getElementsByClassName("list-item-caption")[0].innerHTML;
        let subListItem = target.parentElement.children; 
        let mobilList = document.querySelector(".filter-list-mobile"); 
        let mobileItem = mobilList.getElementsByClassName("filter-list-item-mobile"); 
        let index = [...parentList.parentNode.children].indexOf(parentList); 
        let value = parentList.getElementsByClassName("select-value")[0]; 
        let targetHtml = target.innerHTML; 
        if (targetHtml === "Not selected") { 
            parentList.classList.remove("select"); 
            for (let i = 0; i < subListItem.length; i++) {
                subListItem[i].classList.remove("highlight"); 
            }
            mobileItem[index].innerHTML = parentListHtml; 
            mobileItem[index].classList.remove("select"); 
        } else {
            parentList.classList.add("select"); 
            value.innerHTML = targetHtml; 
            mobileItem[index].innerHTML = targetHtml; 
            mobileItem[index].classList.add("select"); 
            for (let i = 0; i < subListItem.length; i++) {
                subListItem[i].classList.remove("highlight"); 
            }
            target.classList.add("highlight");
        }
    });

 
    function createItem(data) {
        let item = document.createElement("div");
        item.className = "catalog-item";
        item.setAttribute("data-id", data.id);
        item.innerHTML = `<div class="catalog-item-img">
                          <div class="item-img-overlay">
                          <span>Подивитись</span>
                          </div>
                          <img src="${data.thumbnail}" alt="${data.title}">
                          </div>
                          <h4 class="catalog-item-title">${data.title}</h4>
                          ${data.discountedPrice === null && data.price === null ? '<p class="catalog-item-placeholder">'+data.placeholder+'</p>' : data.discountedPrice === data.price ? '<span class="catalog-item-price">'+ data.price +'</span>' : '<span class="catalog-item-discount-price">'+ data.discountedPrice + ' -' + (100 - data.discountedPrice * 100 / data.price).toFixed() + '%'+'</span>' + '<span class="catalog-item-price">'+ data.price +'</span>'}
                          ${data.hasNew ? '<span class="catalog-item-has-new">New</span>' : ''} 
                          </div>`;
        return item;
    }

   
    for (let i = 0; i < 12; i++) {
        items.appendChild(createItem(newData[i]));
    }

    
    items.addEventListener("click", function (e) {
        let target = e.target;
        while (target != this) {
            if (target.classList.contains("catalog-item")) {
                let id = target.getAttribute("data-id");
                localStorage.setItem("itemId", id);
                document.location.href = "item.html";
            }
            target = target.parentNode;
        }
    });

   
    showMore.addEventListener("click", function () {
        let itemsCount = items.children.length;
        if (document.body.clientWidth > 1024) {
            for (let i = itemsCount - 1; i < itemsCount + 3; i++) {
                if (itemsCount > data.length) this.remove();
                items.appendChild(createItem(data[i]));
            }
        } else if (document.body.clientWidth > 768 && document.body.clientWidth <= 1024) {
            for (let i = itemsCount - 1; i < itemsCount + 2; i++) {
                if (itemsCount > data.length) this.remove();
                items.appendChild(createItem(data[i]));
            }
        } else if (document.body.clientWidth <= 768) {
            for (let i = itemsCount - 1; i < itemsCount + 1; i++) {
                if (itemsCount > data.length) this.remove();
                items.appendChild(createItem(data[i]));
            }
        }
    });

    
    function createPromo() {
        let promo = document.createElement("div");
        promo.className = "catalog-promo";
        return promo;
    }

  
    if (document.body.clientWidth > 1024) {
        items.insertBefore(createPromo(), items.children[4]);
    } else if (document.body.clientWidth > 768 && document.body.clientWidth <= 1024) {
        items.insertBefore(createPromo(), items.children[3]);
    } else if (document.body.clientWidth <= 768) items.insertBefore(createPromo(), items.children[2]);

    
    window.addEventListener("resize", function () {
        items.querySelector(".catalog-promo").remove();
        if (document.body.clientWidth > 1024) {
            items.insertBefore(createPromo(), items.children[4]);
        } else if (document.body.clientWidth > 768 && document.body.clientWidth <= 1024) {
            items.insertBefore(createPromo(), items.children[3]);
        } else if (document.body.clientWidth <= 768) items.insertBefore(createPromo(), items.children[2]);
    });

  
    mobileFilter.addEventListener("click", function (e) {
        let target = e.target;
        if (target.classList.contains("close-filter")) {
            filter.classList.remove("filter-open");
        } else filter.classList.add("filter-open");
    });

});