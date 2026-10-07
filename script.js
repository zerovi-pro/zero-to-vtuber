document.addEventListener("DOMContentLoaded",()=>{
    const opening=document.getElementById("openingScreen");
    const finishOpening=()=>{
        opening.classList.add("done");
        // Openingが完全に消える少し前に本編を浮かび上がらせる
        setTimeout(()=>{
            document.body.classList.remove("is-loading");
            document.body.classList.add("opening-finished");
        },420);
        setTimeout(()=>opening.remove(),1500);
    };

    // 少しだけ余韻を残してからトップを表示
    window.addEventListener("load",()=>{
        setTimeout(finishOpening,2300);
    });

    // 読み込みに時間がかかる環境でも画面が止まり続けないようにする
    setTimeout(finishOpening,4200);

    const items=document.querySelectorAll(".reveal");
    const observer=new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },{threshold:.12});
    items.forEach(item=>observer.observe(item));

    const header=document.querySelector(".header");
    window.addEventListener("scroll",()=>{
        header.style.background=window.scrollY>50?"rgba(7,8,13,.88)":"rgba(7,8,13,.72)";
    },{passive:true});
});
