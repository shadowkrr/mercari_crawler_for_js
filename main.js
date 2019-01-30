var title = link = price = src = text = "";

$(".items-box").each(function(index, element){
    // title
    title = $(".items-box").eq(index).find("a").eq(0).children().eq(1).children().eq(0).text();

    // link
    link = $(".items-box").eq(index).find("a").eq(0).attr("href");

    // price
    price = $(".items-box").eq(index).find("a").eq(0).children().eq(1).children().eq(1).children().eq(0).text();

    // src
    src = $(".items-box").find("img").eq(index).attr("data-src")

    // text
    text = title + " " + price + " " + link;

    console.log("title: " + title);
    console.log("link: " + link);
    console.log("price: " + price);
    console.log("src: " + src);
    console.log("text: " + text);
});
