// newsletter
function chkFormEmail(email) {
    let nl_email = $("#nl_email").val();
    let chk_email = check_email(nl_email);
    let chk_agree = $("#nl_agree").prop("checked");

    // console.log(chk_email, chk_agree);
    if(chk_email && chk_agree) {
        $("#btn_mailing").removeClass("disable");
    } else {
        $("#btn_mailing").addClass("disable");
    }
}

$("#nl_email").keyup(function(){
    chkFormEmail();        
});

$("#nl_agree").change(function(){
    chkFormEmail();
});


if(ICL_LANGUAGE_CODE == "en-us") {
    $("#country_nl_box").hide();
    $("#language_nl_box").hide();



}

// .scrollbar 요소의 스크롤바 존재 여부 확인
function checkScrollbarExistence() {
  const scrollbar = document.querySelector('.scrollbar');
  if (scrollbar) {
    const hasScrollbar = scrollbar.scrollHeight > scrollbar.clientHeight;
    // console.log('스크롤바 존재 여부:', hasScrollbar ? '있음' : '없음');

    // if(hasScrollbar) {
    //     $(".layer_mailing").css("max-height", "calc(100vw * (880 / 1919))");
    // } else {
    //     $(".layer_mailing").css("max-height", "calc(100vw * (860 / 1919))");
    // }
  } else {
    // console.log('.scrollbar 요소를 찾을 수 없습니다.');
  }
}
window.addEventListener('load', checkScrollbarExistence);
window.addEventListener('resize', checkScrollbarExistence);




$("#phone_list_nl").on("change", function() {
    let dial_code_value = $(this).val();
    if(dial_code_value == '') {
        $("#phone_country_nl").val('');
        $("[data-role=alert][for='phone_country_nl']").text("");
        return;
    }
    
    let dial_code = $(this).val();
    $("#phone_country_nl").val(dial_code);
    $("[data-role=alert][for='phone_country_nl']").text("");
   
});



$("#phone_local_nl").on("keyup", function() {
        
    let phone_local = $(this).val();
    // console.log(phone_local);
    phone_local = check_number_keydown(phone_local);
    $(this).val(phone_local);
    // console.log(phone_local);
    // console.log($("#phone_country_nl").val());
    // console.log($("#phone_local_nl").val());


});


$("#btn_mailing").click(function(){
    let nl_email = $("#nl_email").val();
    let chk_email = check_email(nl_email);
    let chk_agree = $("#nl_agree").prop("checked");
    if(!chk_email) {
        $("#nl_email_wrap").fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
        return false;
    }
    if(!chk_agree) {
        $("#nl_agree_wrap").fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
        return false;
    }
    $("#email_nl").val(nl_email);
    $(".layer_mailing").addClass("on");
    $(".dim").css("display", "block");
    $(".dim").animate({
        opacity: 1
    }, 300);
    

});

$(document).on("click", "#btn_close_nl, .dim", function(event){
    $(".layer_mailing").removeClass("on");
    
    $(".dim").animate({
        opacity: 0
    }, 300);
    $(".dim").css("display", "none");
    
    event.preventDefault();
});


$("#language_list li").on("click", function() {
    let type = $(this).text();
    $("#language_nl").val(type);
    $(this).addClass('current').siblings().removeClass('current');
    $("#language_selected").text(type);
});
$("#interest_list li").on("click", function() {
    let type = $(this).text();
    $("#interest_nl").val(type);
    $(this).addClass('current').siblings().removeClass('current');
    $("#interest_selected").text(type);
});

$("select[id=phone_list_nl]").on("change", function() {
    // console.log("change");
    $("#phone_local_nl").focus();
});

$("#btn_submit_newsletter").click(function(){
    let email = $("#email_nl").val();
    // let firstname = $("#firstname_nl").val();
    // let lastname = $("#lastname_nl").val();

    let method = $("#method").val();

    function scrollToTop() {
        if(method == "subscribe") {
            window.scrollTo(0, 0);
        } else {
            $('.scrollbar').scrollTop(0);
        }
    }

    function hideLayer() {
        if(method != "subscribe") {
            $(".layer_mailing").removeClass("on");
            $(".layer_mailing").css("opacity", "0");
        }
    }

    let phone = "";
    let phone_country = $("#phone_country_nl").val();
    let phone_local = $("#phone_local_nl").val();

    if (phone_country !== "" && phone_local !== "") {
        phone = phone_country + ' ' + phone_local;
        // 클라비요 포맷에 맞게 전화번호 공백 제거
        phone = phone.replace(/\s/g, '');
    }
    // console.log(phone);
    
    // console.log(ICL_LANGUAGE_CODE);

    let country = "";
    let language = "";

    if(ICL_LANGUAGE_CODE != "en-us") {
        country = $("#country_nl").val();
        language = $("#language_nl").val();
        // console.log(country, language);

        let iso3 = $("#country_nl option:selected").data("iso3");
        // PRI,GUM,ASM,VIR,MNP
        const US_TERRITORIES = ["PRI", "GUM", "ASM", "VIR", "MNP"];
        if (US_TERRITORIES.includes(iso3)) {
            // country = "United States";
            country = $("#country_nl option[data-iso3='USA']").val();
        }
    } else {
        country = "United States";
        language = "English";
    }
    
    let interest_list = [];
    $('input[name="interest"]:checked').each(function() {
        interest_list.push($(this).val());
    });
    let interest = interest_list.join(',');
    
    // let chk = $("#mailing_checkbox").prop("checked");
    let chk_email = check_email(email);
    let chk_agree = $("#mailing_checkbox").prop("checked");

    if(!chk_email) {
        document.getElementById('email_nl').scrollIntoView({behavior:'smooth',block:'center',inline:'nearest'});
        $("#email_nl_wrap").fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
        return false;
    }
    // if(firstname == "") {
    //     document.getElementById('firstname_nl').scrollIntoView({behavior:'smooth',block:'center',inline:'nearest'});
    //     $("#firstname_nl").fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
    //     return false;
    // }
    // if(lastname == "") {
    //     document.getElementById('lastname_nl').scrollIntoView({behavior:'smooth',block:'center',inline:'nearest'});
    //     $("#lastname_nl").fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
    //     return false;
    // }

    // 필수 항목 제외
    // if(phone_country == "") {
    //     document.getElementById('phone_nl_wrap').scrollIntoView({behavior:'smooth',block:'center',inline:'nearest'});
    //     $("#phone_nl_wrap").fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
    //     return false;
    // }
    // if(phone_local == "") {
    //     document.getElementById('phone_nl_wrap').scrollIntoView({behavior:'smooth',block:'center',inline:'nearest'});
    //     $("#phone_nl_wrap").fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
    //     return false;
    // }

    // 전화번호 길이 제한, 빈칸 제거
    // 국가번호 포함 + 제외 15자리 이상일 경우 오류
    // phone_no_space = phone.replace(/\s|\+/g, '');
    // console.log(phone_no_space);
    // if(phone_no_space.length < 10 || phone_no_space.length > 15) {
    //     document.getElementById('phone_nl_wrap').scrollIntoView({behavior:'smooth',block:'center',inline:'nearest'});
    //     $("#phone_nl_wrap").fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
    //     return false;
    // }


    if(ICL_LANGUAGE_CODE != "en-us") {
        if(country == "") {
            document.getElementById('country_nl_wrap').scrollIntoView({behavior:'smooth',block:'center',inline:'nearest'});
            $("#country_nl_wrap").fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
            return false;
        }
        if(language == "") {
            document.getElementById('language_nl_wrap').scrollIntoView({behavior:'smooth',block:'center',inline:'nearest'});
            $("#language_nl_wrap").fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
            return false;
        }
    }

    if(interest == "") {
        document.getElementById('interest_nl_wrap').scrollIntoView({behavior:'smooth',block:'center',inline:'nearest'});
        $("#interest_nl_wrap").fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
        return false;
    }
    if(!chk_agree) {
        document.getElementById('agree_wrap').scrollIntoView({behavior:'smooth',block:'center',inline:'nearest'});
        $("#agree_wrap").fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
        return false;
    }

    // 클라비요 포맷에 맞게 전화번호 공백 제거
    phone = phone.replace(/\s/g, '');


    let data = {
        action: 'insert_klaviyo',
        email: email,
        phone: phone,
        country: country,
        language: language,
        interest: interest,
        language_code: ICL_LANGUAGE_CODE,
    };

    // console.log(data);
    // return false;






    // console.log(data);
    // let brand = "";
    // if(ICL_LANGUAGE_CODE == "en" || ICL_LANGUAGE_CODE == "en-us") {
    //     brand = "Sena";
    // } else {
    //     brand = "SenaEU";
    // }
    // console.log('Newsletter Subscription Request:', {
    //     operation: "SubscribePopup",
    //     data: {
    //         customer: {
    //             email: email,
    //             mobilePhone: phone,
    //             customFields: {
    //                 languageChoice: language,
    //                 Country: country,
    //                 Interests: interest.split(',')
    //             },
    //             subscriptions: [
    //                 {
    //                     brand: brand,
    //                     pointOfContact: "Email",
    //                     isSubscribed: true
    //                 },
    //                 {
    //                     brand: brand,
    //                     pointOfContact: "SMS",
    //                     isSubscribed: true
    //                 }
    //             ]
    //         }
    //     }
    // });
    // return false;


    $.ajax({
        // url: '<?=get_template_directory_uri()?>/ajax/newsletter.php',
        url: wpjx_ajaxurl,
        type: 'POST',
        data: data,
        dataType: 'json',
        success: function(data) {
            console.log('data',data);

            // // reset
            // $("#email_nl").val("");
            // clearTomSelectById('phone_list_nl'); $("#phone_local_nl").val("");
            // clearTomSelectById('country_nl');
            // $("#language_nl").val(""); $("#language_selected").text($("#language_selected").data("text"));
            // $('input[name="interest"]').prop('checked', false);            
            // $('.scrollbar').scrollTop(0);

            // if(data['error']['code'] == "duplicate_profile") {
            //     console.log("중복된 프로필입니다.");
            // }
            let action = "";
            
            if(data && data.data && data.data.attributes && data.data.attributes.email == email) {
                // alert("success");
                hideLayer();
                // $(".layer_mailing").removeClass("on");
                // $(".layer_mailing").css("opacity", "0");
                switch (ICL_LANGUAGE_CODE) {
                    case "en":
                        generateModalHTML("You are successfully subscribed.<br>Get special offers and the latest Sena updates!", "Thank You", "Close", "submission", "success");
                        break;
                    case "en-us":
                        generateModalHTML("You are successfully subscribed.<br>Get special offers and the latest Sena updates!", "Thank You", "Close", "submission", "success");
                        break;
                    case "en-eu":
                        generateModalHTML("You are successfully subscribed.<br>Get special offers and the latest Sena updates!", "Thank You", "Close", "submission", "success");
                        break;
                    case "de":
                        generateModalHTML("Sie haben Ihr Abonnement erfolgreich abgeschlossen.<br>Erhalten Sie Sonderangebote und die neuesten Sena-Updates!", "Danke", "Schließen", "submission", "success");
                        break;
                    case "fr":
                        generateModalHTML("Vous êtes abonné avec succès.<br>Recevez des offres spéciales et les dernières mises à jour de Sena!", "Merci", "Fermer", "submission", "success");
                        break;
                    case "it":
                        generateModalHTML("Ti sei iscritto con successo.<br>Ricevi offerte speciali e gli ultimi aggiornamenti di Sena!", "Grazie", "Chiudi", "submission", "success");
                        break;
                    case "es":
                        generateModalHTML("Estás suscrito correctamente.<br>¡Obtenga ofertas especiales y las últimas actualizaciones de Sena!", "Gracias", "Cerrar", "submission", "success");
                        break;
                }

                // 쿠키반영
                let currentLang = ICL_LANGUAGE_CODE || 'en';
                let cookieName = 'newsletter_popup_' + currentLang;
                setCookie(cookieName, 'hidden', 7);

                let brand = "";
                if(ICL_LANGUAGE_CODE == "en" || ICL_LANGUAGE_CODE == "en-us") {
                    brand = "Sena";
                } else {
                    brand = "SenaEU";
                }

                // 250513 jason Maestra
                maestra("async", {
                    operation: "SubscribePopup",
                    data: {
                        customer: {
                            email: email,
                            mobilePhone: phone,
                            customFields: {
                                languageChoice: language,
                                Country: country,
                                Interests: interest.split(',')
                            },
                            subscriptions: [
                                {
                                    brand: brand,
                                    pointOfContact: "Email",
                                    isSubscribed: true
                                },
                                {
                                    brand: brand,
                                    pointOfContact: "SMS",
                                    isSubscribed: true
                                }
                            ]
                        }
                    }
                });





            } else if (data['errors'] && data['errors'][0] && data['errors'][0]['code'] == "duplicate_profile") {
                // alert("fail");
                hideLayer();
                // $(".layer_mailing").removeClass("on");
                // $(".layer_mailing").css("opacity", "0");
                switch (ICL_LANGUAGE_CODE) {
                    case "en":
                        generateModalHTML("You are already subscribed.<br>Please check your input and try again.", "Confirm", "Close", "default", "fail");
                        break;
                    case "en-us":
                        generateModalHTML("You are already subscribed.<br>Please check your input and try again.", "Confirm", "Close", "default", "fail");
                        break;
                    case "en-eu":
                        generateModalHTML("You are already subscribed.<br>Please check your input and try again.", "Confirm", "Close", "default", "fail");
                        break;
                    case "de":
                        generateModalHTML("Sie sind bereits abonniert.<br>Bitte überprüfen Sie Ihre Eingabe und versuchen Sie es erneut.", "Bestätigen", "Fortfahren", "default", "fail");
                        break;
                    case "fr":
                        generateModalHTML("Vous êtes déjà abonné.<br>Veuillez vérifier votre saisie et réessayer.", "Confirmer", "Continuer", "default", "fail");
                        break;
                    case "it":
                        generateModalHTML("Sei già un abbonato.<br>Controlla i dettagli e riprova.", "Conferma", "Continua", "default", "fail");
                        break;
                    case "es":
                        generateModalHTML("Ya eres suscriptor.<br>Por favor verifique su entrada e inténtelo nuevamente.", "Confirmar", "Continuar", "default", "fail");
                        break;
                }

                // 쿠키반영
                let currentLang = ICL_LANGUAGE_CODE || 'en';
                let cookieName = 'newsletter_popup_' + currentLang;
                setCookie(cookieName, 'hidden', 7);
                
            } else if (data['errors'] && data['errors'][0] && data['errors'][0]['code'] == "invalid") {
                
                hideLayer();
                // $(".layer_mailing").removeClass("on");
                // $(".layer_mailing").css("opacity", "0");
                action = "invalid";
                generateModalHTML(data['errors'][0]['detail'], "Confirm", "Close", "invalid", "fail");
            
            } else if (data['status'] === 'skipped') {
                // 개발자 IP: 입력값을 콘솔에 출력하고 성공 처리
                console.log('Developer IP Test Response:', data);
                // hideLayer();
                alert("Developer IP Test Response: " + JSON.stringify(data));
            } else {
                // alert("fail");
                hideLayer();
                // $(".layer_mailing").removeClass("on");
                // $(".layer_mailing").css("opacity", "0");
                switch (ICL_LANGUAGE_CODE) {
                    case "en":
                        generateModalHTML("An unknown error occurred.<br>Please try again.", "Error", "Close", "default", "fail");
                        break;
                    case "en-us":
                        generateModalHTML("An unknown error occurred.<br>Please try again.", "Error", "Close", "default", "fail");
                        break;
                    case "en-eu":
                        generateModalHTML("An unknown error occurred.<br>Please try again.", "Error", "Close", "default", "fail");
                        break;
                    case "de":
                        generateModalHTML("Ein unbekannter Fehler ist aufgetreten.<br>Bitte versuche es erneut.", "Fehler", "Fortfahren", "default", "fail");
                        break;
                    case "fr":
                        generateModalHTML("Une erreur inconnue est survenue.<br>Veuillez réessayer.", "Erreur", "Continuer", "default", "fail");
                        break;
                    case "it":
                        generateModalHTML("Si è verificato un errore sconosciuto.<br>Per favore riprova.", "Errore", "Continua", "default", "fail");
                        break;
                    case "es":
                        generateModalHTML("Un error desconocido ocurrió.<br>Inténtalo de nuevo.", "Error", "Continuar", "default", "fail");
                        break;
                }
            }

            if(action != "invalid") {

                // reset
                $("#email_nl").val("");
                clearTomSelectById('phone_list_nl'); $("#phone_local_nl").val("");
                clearTomSelectById('country_nl');
                $("#language_nl").val(""); $("#language_selected").text($("#language_selected").data("text"));
                $('input[name="interest"]').prop('checked', false);            
                scrollToTop();

            } else {
                scrollToTop();
            }


        }
    });
});
