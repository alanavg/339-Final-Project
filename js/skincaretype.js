
document.querySelector("#normal").addEventListener("click", function() {
    document.querySelector(".row").style.border = "8px #f4cccc solid";
    document.querySelector("#normal").style.border = "4px black solid";
});

document.querySelector("#oily").addEventListener("click", function() {
    document.querySelector(".row").style.border = "8px #d9d2e9 solid";
    document.querySelector("#normal").style.border = "1px black solid";
});

document.querySelector("#dry").addEventListener("click", function() {
    document.querySelector(".row").style.border = "8px #cfe2f3 solid";
    document.querySelector("#normal").style.border = "1px black solid";
});

document.querySelector("#combo").addEventListener("click", function() {
    document.querySelector(".row").style.border = "8px #d9ead3 solid";
    document.querySelector("#normal").style.border = "1px black solid";
});

document.querySelector("#sensitive").addEventListener("click", function() {
    document.querySelector(".row").style.border = "8px #FFE4CA solid";
    document.querySelector("#normal").style.border = "1px black solid";
});



// normal skin flexbox
document.querySelector("#normal").addEventListener("click", function() {

    // skincare information from https://youtopiabeauty.com/the-7-skin-types-and-how-to-identify-yours/
	document.getElementById('type').innerHTML = "Normal Skin Type";
    document.getElementById("skin-description").innerHTML = "~ Normal skin type is not too oily and not too dry <br>&nbsp;<br> ~ The T-zone area (forehead, chin, and nose) may experience some oiliness, but not an excessive amount <br>&nbsp;<br> ~ Those with a normal skin type may experience seasonal dryness and oiliness <br>&nbsp;<br> ~ Although normal skin types don't struggle with dryness or oiliness, it's important to have a hydrating and gentle skin care routine to avoid skin barrier damage and dehydrated skin :)";
   
    // image from Kravebeauty.com
    document.getElementById("img1").src="images/normal-matcha.webp";
    document.getElementById('img1').alt='Krave Beauty Matcha Hemp Hydrating Cleanser tube'
    document.getElementById('txt1').innerHTML = "Krave Beauty's Matcha Hemp Hydrating Cleanser";


    // image from https://thesummerstudy.com/review-youth-to-the-people-superfood-cleanser/
    document.getElementById("img2").src="images/YTP.webp";
    document.getElementById('img2').alt='Youth To The People Superfood Cleanser bottle'
    document.getElementById('txt2').innerHTML = "Youth To The People Superfood Cleanser";

    // image from https://www.pinterest.com/pin/759489924639476725/
    document.getElementById("img3").src="images/normal-ceta.jpeg";
    document.getElementById('img3').alt='Cetaphil Gentle Skin Cleanser bottle'
    document.getElementById('txt3').innerHTML = "Cetaphil Gentle Skin Cleanser";

    // image from https://www.pinterest.com/pin/540291286560560916/
    document.getElementById("img4").src="images/normal-hydroboost.jpeg";
    document.getElementById('img4').alt='Two Neutrogena Hydro Boost Water Gel bottles with water balloons in the background'
    document.getElementById('txt4').innerHTML = "Neutrogena Hydro Boost Water Gel";

    // image from https://www.pinterest.com/pin/377809856247421147/
    document.getElementById("img5").src="images/normal-supergoop.jpeg";
    document.getElementById('img5').alt='Supergoop Unseen Sunscreen bottle'
    document.getElementById('txt5').innerHTML = "Supergoop Unseen Sunscreen";

    // image from https://www.pinterest.com/pin/188869778115181328/
    document.getElementById("img6").src="images/tjs-suncreen.jpeg";
    document.getElementById('img6').alt="Two Trader Joe's Daily Facial Sunscreen SPF 40 bottles"
    document.getElementById('txt6').innerHTML = "Trader Joe's Daily Facial Sunscreen SPF 40 (a good dupe for the Supergoop Unseen Sunscreen";

    // image from https://www.pinterest.com/pin/675680750339150368/
    document.getElementById("img7").src="images/normal-YTP-exfoliant.jpeg";
    document.getElementById('img7').alt="Youth to The People Kombucha Exfoliation Power Toner bottle"
    document.getElementById('txt7').innerHTML = "Youth to The People Kombucha Exfoliation Power Toner";

    // image from https://www.pinterest.com/pin/1151725304678971362/
    document.getElementById("img8").src="images/normal-laroche.jpeg";
    document.getElementById('img8').alt="La Roche-Posay Toleriane Double Repair Face Moisturizer bottle"
    document.getElementById('txt8').innerHTML = "La Roche-Posay Toleriane Double Repair Face Moisturizer";

    // image from https://www.walmart.com/ip/Cetaphil-Moisturizing-Lotion-for-All-Skin-Types-Fragrance-Free-16-fl-oz/888209
    document.getElementById("img9").src="images/normal-ceta-lotion.webp";
    document.getElementById('img9').alt="Cetaphil Moisturizing Lotion bottle"
    document.getElementById('txt9').innerHTML = "Cetaphil Moisturizing Lotion"; 

});


// oily flexbox
document.querySelector("#oily").addEventListener("click", function() {

    // skincare information from https://youtopiabeauty.com/the-7-skin-types-and-how-to-identify-yours/
	document.getElementById('type').innerHTML = "Oily Skin Type";
    document.getElementById("skin-description").innerHTML = "~ Shiny or greasy by mid-day no matter what season it is <br>&nbsp;<br> ~ The pores on the face are visible and large <br>&nbsp;<br> ~ Experience frequent breakouts <br>&nbsp;<br> ~ Those with an oily skin type have sebaceous glands that overproduce oil <br>&nbsp;<br> ~ Although those with oily skin may feel moisturized already, it's important to moisturize and not use products that will strip your skin or harm your skin barrier";
   
    // image from https://www.pinterest.com/pin/137289488883134131/
    document.getElementById("img1").src="images/oily-cerave.jpeg";
    document.getElementById('img1').alt='CeraVe Foaming Face Wash bottle'
    document.getElementById('txt1').innerHTML = "CeraVe Foaming Face Wash";


    // image from https://www.pinterest.com/pin/680747299954822754/
    document.getElementById("img2").src="images/oily-acnefree.jpeg";
    document.getElementById('img2').alt='Neutrogena Oil-Free Acne Fighting Face Wash, Daily Cleanser with Salicylic Acid bottle'
    document.getElementById('txt2').innerHTML = "Neutrogena Oil-Free Acne Fighting Face Wash, Daily Cleanser with Salicylic Acid";

    // image from https://www.sephora.com/product/beste-no-9-jelly-cleanser-P426836?correlationId=5a269603-64f4-423a-a062-134861673999&om_mmc=aff-linkshare-redirect-tv2R4u9rImY&c3ch=Linkshare&c3nid=tv2R4u9rImY&affid=tv2R4u9rImY-oMXD25EkXkBzsiep40uERA&ranEAID=tv2R4u9rImY&ranMID=2417&ranSiteID=tv2R4u9rImY-oMXD25EkXkBzsiep40uERA&ranLinkID=10-1&browserdefault=true

    document.getElementById("img3").src="images/oily-jelly.jpeg";
    document.getElementById('img3').alt='Drunk Elephant Beste™ No. 9 Jelly Cleanser bottle'
    document.getElementById('txt3').innerHTML = "Drunk Elephant Beste™ No. 9 Jelly Cleanser";

    // image from https://www.pinterest.com/pin/540291286560560916/
    document.getElementById("img4").src="images/oily-paula.jpeg";
    document.getElementById('img4').alt="Paula's Choice Skin Perfecting 2% BHA Liquid Exfoliant bottle";
    document.getElementById('txt4').innerHTML = "Paula's Choice Skin Perfecting 2% BHA Liquid Exfoliant";

    // image from https://www.pinterest.com/pin/709317010077178448/
    document.getElementById("img5").src="images/oily-inkey.jpeg";
    document.getElementById('img5').alt='The Inkey List PHA Gentle Exfoliating Toner bottle'
    document.getElementById('txt5').innerHTML = "The Inkey List PHA Gentle Exfoliating Toner";

    // image from https://www.pinterest.com/pin/188869778115181328/
    document.getElementById("img6").src="images/tjs-suncreen.jpeg";
    document.getElementById('img6').alt="Two Trader Joe's Daily Facial Sunscreen SPF 40 bottles"
    document.getElementById('txt6').innerHTML = "Trader Joe's Daily Facial Sunscreen SPF 40 (a good dupe for the Supergoop Unseen Sunscreen";

    // image from https://www.pinterest.com/pin/71213237848908775/
    document.getElementById("img7").src="images/oily-nia.jpeg";
    document.getElementById('img7').alt="Paula's Choice 10% Niacinamide Booster bottle";
    document.getElementById('txt7').innerHTML = "Paula's Choice 10% Niacinamide Booster";

    // image from https://www.pinterest.com/pin/1029354058557568023/
    document.getElementById("img8").src="images/oily-ordinary.jpeg";
    document.getElementById('img8').alt="The Ordinary Niacinamide 10% + Zinc 1% bottle"
    document.getElementById('txt8').innerHTML = "The Ordinary Niacinamide 10% + Zinc 1%";

    // image from https://www.teenvogue.com/gallery/best-acne-treatment-products-acne-awards-2018
    document.getElementById("img9").src="images/oily-bha.webp";
    document.getElementById('img9').alt="Cosrx BHA Blackhead Power Liquid bottle"
    document.getElementById('txt9').innerHTML = "Cosrx BHA Blackhead Power Liquid"; 

});

// dry skin flexbox
document.querySelector("#dry").addEventListener("click", function() {

    // skincare information from https://youtopiabeauty.com/the-7-skin-types-and-how-to-identify-yours/
	document.getElementById('type').innerHTML = "Dry Skin Type";
    document.getElementById("skin-description").innerHTML = "~ Dry skin types are due to a lack of sebum production  <br>&nbsp;<br> ~ The skin feels rough, dry, or scaley <br>&nbsp;<br> ~ Less visible and small pores on the face <br>&nbsp;<br> ~ Those with a dry skin type are prone to irritation, dehydrated skin, and fine lines <br>&nbsp;<br> ~ Gentle mositurizing products are key for those with a dry skin type";
   
    // image from https://www.pinterest.com/pin/82331499666933492/
    document.getElementById("img1").src="images/dry-ceta.jpeg";
    document.getElementById('img1').alt="Cetaphil Moisturizing Cream bottle"
    document.getElementById('txt1').innerHTML = "Cetaphil Moisturizing Cream";


    // image from https://www.pinterest.com/pin/635570566180228193/
    document.getElementById("img2").src="images/dry-cream.jpeg";
    document.getElementById('img2').alt='First Aid Beauty Ultra Repair Cream Intense Hydration bottle'
    document.getElementById('txt2').innerHTML = "First Aid Beauty Ultra Repair Cream Intense Hydration";

    // image from https://www.pinterest.com/pin/112027110541283639/
    document.getElementById("img3").src="images/dry-milk.jpeg";
    document.getElementById('img3').alt='Versed Baby Cheeks All-In-One Hydrating Milk bottle'
    document.getElementById('txt3').innerHTML = "Versed Baby Cheeks All-In-One Hydrating Milk";

    // image from https://www.pinterest.com/pin/492370171772086823/
    document.getElementById("img4").src="images/dry-inkey.jpeg";
    document.getElementById('img4').alt="The Inkey List Hyaluronic Acid Serum bottle";
    document.getElementById('txt4').innerHTML = "The Inkey List Hyaluronic Acid Serum";

    // image from https://www.pinterest.com/pin/1010213760143033042/
    document.getElementById("img5").src="images/h-acid.jpeg";
    document.getElementById('img5').alt='Hyaluronic Acid 2% + B5 Hydrating Serum bottle'
    document.getElementById('txt5').innerHTML = "Hyaluronic Acid 2% + B5 Hydrating Serum";

    // image from https://www.pinterest.com/pin/467881848802537456/
    document.getElementById("img6").src="images/dry-sunscreen.jpeg";
    document.getElementById('img6').alt="Paula's Choice Skin Restoring Moisturizer with SPF 50"
    document.getElementById('txt6').innerHTML = "Paula's Choice Skin Restoring Moisturizer with SPF 50";

    // image from https://www.pinterest.com/pin/71213237848908775/
    document.getElementById("img7").src="images/dry-gloss.jpeg";
    document.getElementById('img7').alt="Glossier Super Glow Vitamin c + Magnesium Serum bottle";
    document.getElementById('txt7').innerHTML = "Glossier Super Glow Vitamin c + Magnesium Serum";

    // image from https://www.pinterest.com/pin/56858014034053288/
    document.getElementById("img8").src="images/dry-laroche.jpeg";
    document.getElementById('img8').alt="La Roche-Posay Double Repair Face Moisturizer bottle"
    document.getElementById('txt8').innerHTML = "La Roche-Posay Double Repair Face Moisturizer";

    // image from https://www.teenvogue.com/gallery/best-acne-treatment-products-acne-awards-2018
    document.getElementById("img9").src="images/dry-eye.jpeg";
    document.getElementById('img9').alt="Kiehl's Avocado Eye Cream bottle";
    document.getElementById('txt9').innerHTML = "Kiehl's Avocado Eye Cream "; 
 
});

// combo skin flexbox
document.querySelector("#combo").addEventListener("click", function() {

    // skincare information from https://youtopiabeauty.com/the-7-skin-types-and-how-to-identify-yours/
	document.getElementById('type').innerHTML = "Combination Skin Type";
    document.getElementById("skin-description").innerHTML = "~ The combination skin type is a combination of dry and oily skin  <br>&nbsp;<br> ~ The T-zone is oily, but the cheeks are dry <br>&nbsp;<br> ~ Those with a combination skin type must apply certain products for each skin type area on their face to suit their face's needs";
   
    // image from https://www.pinterest.com/pin/490681321911686314/
    document.getElementById("img1").src="images/com-cerave.jpeg";
    document.getElementById('img1').alt="CeraVe Renewing SA Cleanser bottle";
    document.getElementById('txt1').innerHTML = "CeraVe Renewing SA Cleanser";


    // image from https://www.pinterest.com/pin/635570566180228193/
    document.getElementById("img2").src="images/com-avo.jpeg";
    document.getElementById('img2').alt='Glow Recipe Avocado Ceramide Redness Relief Serum bottle';
    document.getElementById('txt2').innerHTML = "Glow Recipe Avocado Ceramide Redness Relief Serum";

    // image from https://www.pinterest.com/pin/1128855462821056129/
    document.getElementById("img3").src="images/com-glow.jpeg";
    document.getElementById('img3').alt="Pixi Glow Tonic Toner bottle";
    document.getElementById('txt3').innerHTML = "Pixi Glow Tonic Toner";

    // image from https://www.pinterest.com/pin/492370171772086823/
    document.getElementById("img4").src="images/dry-inkey.jpeg";
    document.getElementById('img4').alt="The Inkey List Hyaluronic Acid Serum bottle";
    document.getElementById('txt4').innerHTML = "The Inkey List Hyaluronic Acid Serum";

    // image from https://www.pinterest.com/pin/1010213760143033042/
    document.getElementById("img5").src="images/com-hy.jpeg";
    document.getElementById('img5').alt="Youth to the People Superfood Air-Whip Moisture Cream";
    document.getElementById('txt5').innerHTML = "Youth to the People Superfood Air-Whip Moisture Cream"; 
    
    // image from https://www.pinterest.com/pin/467881848802537456/
    document.getElementById("img6").src="images/h-acid.jpeg";
    document.getElementById('img6').alt='Hyaluronic Acid 2% + B5 Hydrating Serum bottle'
    document.getElementById('txt6').innerHTML = "Hyaluronic Acid 2% + B5 Hydrating Serum";

    // image from https://www.pinterest.com/pin/71213237848908775/
    document.getElementById("img7").src="images/dry-gloss.jpeg";
    document.getElementById('img7').alt="Glossier Super Glow Vitamin c + Magnesium Serum bottle";
    document.getElementById('txt7').innerHTML = "Glossier Super Glow Vitamin c + Magnesium Serum";

    // image from https://thesummerstudy.com/review-youth-to-the-people-superfood-cleanser/
    document.getElementById("img8").src="images/YTP.webp";
    document.getElementById('img8').alt='Youth To The People Superfood Cleanser bottle';
    document.getElementById('txt8').innerHTML = "Youth To The People Superfood Cleanser";

    // image from https://www.pinterest.com/pin/485474034844230652/
    document.getElementById("img9").src="images/com-glass.jpeg";
    document.getElementById('img9').alt="Peach and Lilly Glass Skin Refining Serum";
    document.getElementById('txt9').innerHTML = "Peach and Lilly Glass Skin Refining Serum"; 
 
});

// sensitive skin flexbox
document.querySelector("#sensitive").addEventListener("click", function() {

    // skincare information from https://youtopiabeauty.com/the-7-skin-types-and-how-to-identify-yours/
	document.getElementById('type').innerHTML = "Sensitive Skin Type";
    document.getElementById("skin-description").innerHTML = "~ A sensitive skin type is when your skin is fragile  <br>&nbsp;<br> ~ Sensitive skin can lead to redness, itching, soreness, and irritiable skin if it is triggered  <br>&nbsp;<br> ~ Some triggers for sensitive skin include strong skincare products, using hard water, or even taking a hot shower <br>&nbsp;<br> ~ There is also naturally sensitive skin from things like rosacea, eczema, and psoriasis";
   
    // image from https://www.pinterest.com/pin/490681321911686314/
    document.getElementById("img1").src="images/sen-remover.jpeg";
    document.getElementById('img1').alt="CeraVe Makeup Removing Cleansing Balm bottle";
    document.getElementById('txt1').innerHTML = "CeraVe Makeup Removing Cleansing Balm";


    // image from https://www.pinterest.com/pin/556194622742779172/
    document.getElementById("img2").src="images/com-sun.jpeg";
    document.getElementById('img2').alt='La Roche-Posay Anthelios SPF 50 Gentle Lotion Mineral Sunscreen bottle';
    document.getElementById('txt2').innerHTML = "La Roche-Posay Anthelios SPF 50 Gentle Lotion Mineral Sunscreen";

    // image from https://www.chickadvisor.com/item/burts-bees-eye-cream-with-cotton-extract/
    document.getElementById("img3").src="images/sen-burts.jpeg";
    document.getElementById('img3').alt="Burt's Bees Sensitive Eye Cream with Cotton Extract bottle";
    document.getElementById('txt3').innerHTML = "Burt's Bees Sensitive Eye Cream with Cotton Extract";

    // image from https://www.ulta.com/p/azelaic-acid-10-suspension-brightening-cream-pimprod2007104?sku=2551154&epik=dj0yJnU9b25sVl9vLU4wYjJQczY1RjRIdWY2SjA0OHo0UERRWS0mcD0wJm49b0pUZnU5VV9OOTVpbng2aGNZZVZMQSZ0PUFBQUFBR09Pb1Fz
    document.getElementById("img4").src="images/sens-az.jpeg";
    document.getElementById('img4').alt="Azelaic Acid 10% Suspension Brightening Cream bottle";
    document.getElementById('txt4').innerHTML = "Azelaic Acid 10% Suspension Brightening Cream";

    // image from https://www.pinterest.com/pin/1010213760143033042/
    document.getElementById("img6").src="images/com-hy.jpeg";
    document.getElementById('img6').alt="Youth to the People Superfood Air-Whip Moisture Cream";
    document.getElementById('txt6').innerHTML = "Youth to the People Superfood Air-Whip Moisture Cream"; 
    
    // image from https://www.pinterest.com/pin/779615385512889011/
    document.getElementById("img5").src="images/sens-bmois.jpeg";
    document.getElementById('img5').alt="Burt's Bees Sensitive Facial Cleanser bottle";
    document.getElementById('txt5').innerHTML = "Burt's Bees Sensitive Facial Cleanser";

    // image from https://www.pinterest.com/pin/71213237848908775/
    document.getElementById("img7").src="images/sens-bcream.jpeg";
    document.getElementById('img7').alt="Burt's Bees Night Cream for Sensitive Skin  bottle";
    document.getElementById('txt7').innerHTML = "Burt's Bees Night Cream for Sensitive Skin ";

    // image from https://thesummerstudy.com/review-youth-to-the-people-superfood-cleanser/
    document.getElementById("img8").src="images/YTP.webp";
    document.getElementById('img8').alt='Youth To The People Superfood Cleanser bottle';
    document.getElementById('txt8').innerHTML = "Youth To The People Superfood Cleanser";

    // image from https://www.pinterest.com/pin/485474034844230652/
    document.getElementById("img9").src="images/soonjung-cream.jpeg";
    document.getElementById('img9').alt="Soon Jung Hydro Barrier Cream bottle";
    document.getElementById('txt9').innerHTML = "Soon Jung Hydro Barrier Cream"; 
 
});