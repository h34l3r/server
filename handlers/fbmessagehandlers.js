const fb_access_token='EAADbu4KaKDABAE8AvGr5Ee3XrZA0eElPMkHyhfObaaJEPwGCfJPlF8qGcgUDUjrVbMU09wUkDxOzmu710ZBHtXLFu22JJcZAWvlC5bYOhSm2sl9WuuUuGokLUqhFmfW5ZCIN45DBWRPw9ZCksft2PZCP0ZBrQxhwz8IlXORECbZClBQ0ddBMotOs'
const RestClient =require('node-rest-client').Client
const request=require('request')
//Dùng API của facebook để gửi tin nhắn (dạng text)
const sendTextMessage = (senderID, text) => {//Người nhận và nội dung nhận
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: { access_token: fb_access_token},
        method: 'POST',
        json: {
            recipient: { id: senderID},
            message: text
        }
    })
}
//GIF
const sendGifMessage = (senderID) => {//Người nhận và nội dung nhận
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: { access_token: fb_access_token},
        method: 'POST',
        json: {
            recipient: { id: senderID},
            message:{
                attachment:{
                    type: "image",
                    payload: {
                        url: "https://uphinhnhanh.com/images/2018/10/02/hello.gif"
                      }
                }        
            }
        }
    })
}
const sendGenericMessageTest = (senderID) => {
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: { access_token: fb_access_token},
        method: 'POST',
        json: {
            recipient: { id: senderID},
            message:{
                attachment:{
                    type: "template",
                    payload: {
                        template_type: "generic",
                        elements:[{
                            title:"Welcome!",
                            image_url:"https://petersfancybrownhats.com/company_image.png",
                            subtitle:"We have the right hat for everyone.",
                            default_action: {
                              type: "web_url",
                              url: "https://petersfancybrownhats.com/view?item=103",
                              messenger_extensions: false,
                              webview_height_ratio: "tall",
                              fallback_url: "https://petersfancybrownhats.com/"
                            },
                            buttons:[
                              {
                                type:"web_url",
                                url:"https://petersfancybrownhats.com",
                                title:"View Website"
                              },{
                                type:"postback",
                                title:"Start Chatting",
                                payload:"DEVELOPER_DEFINED_PAYLOAD"
                              }              
                            ]      
                          }]
                      }
                }        
            }
        }
    })
}
const sendGenericMessageDetail = (senderID) => {
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: { access_token: fb_access_token},
        method: 'POST',
        json: {
            recipient: { id: senderID},
            message:{
                attachment:{
                    type: "template",
                    payload: {
                        template_type: "generic",
                        elements:[{
                            title: "Khu du lịch núi Sam",
                            subtitle: "Núi Sam hay còn gọi là Vĩnh Tế Sơn, là một quả núi có độ cao 284m ở Châu Đốc, An Giang",
                            item_url: "https://www.agtravellive.com/tintuc/timkiem/%7Btukhoa%7D?tukhoa=n%C3%BAi+sam",               
                            image_url: "http://mekongdeltaexplorer.com/wp-content/uploads/nui-sam-1.jpg",
                            buttons: [{
                              type: "web_url",
                              url: "https://www.agtravellive.com/tintuc/timkiem/%7Btukhoa%7D?tukhoa=n%C3%BAi+sam",
                              title: "📜Chi tiết"
                            },{
                              type: "web_url",
                              url: "https://www.google.com/maps/place/Trung+T%C3%A2m+Tm+Khu+Du+L%E1%BB%8Bch+N%C3%BAi+Sam/@10.6797736,105.0697011,15z/data=!4m8!1m2!2m1!1zS2h1IGtodSBs4buLY2ggbsO6aSBzYW0!3m4!1s0x310a212405e92fb7:0xe64c62eadc6426ba!8m2!3d10.6825696!4d105.0856286",
                              title: "🗾Bản đồ"
                              
                            },{
                              type: "element_share" 
                            }],                       
                        }]
                      }
                }        
            }
        }
    })
}
const sendGenericMessage = (senderID) => {//slide
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: { access_token: fb_access_token},
        method: 'POST',
        json: {
            recipient: { id: senderID},
            message: {
                attachment: {
                  type: "template",
                  payload: {
                    template_type: "generic",
                    elements: [{
                      title: "Miếu Bà Chúa Xứ ở Núi Sam",
                      subtitle: "Miễu Bà chúa Xứ có thể xem là địa danh nổi tiếng nhất của An Giang",
                      item_url: "https://www.agtravellive.com/tintuc/diemdulich/81",               
                      image_url: "http://goworldtravel.vn/Data/image/MIEN%20TAY/MIEU%20BA%20CHUA%20XU.jpg",
                      buttons: [{
                        type: "web_url",
                        url: "https://www.agtravellive.com/tintuc/diemdulich/81",
                        title: "📜Chi tiết",
                      },{
                        type: "web_url",
                        url: "https://www.google.com/maps/place/Mi%E1%BA%BFu+B%C3%A0+Ch%C3%BAa+N%C3%BAi+Sam/@10.6797474,105.0762672,17z/data=!4m8!1m2!2m1!1zTWnhur91IELDoCBDaMO6YSBY4bupIOG7nyBOw7ppIFNhbQ!3m4!1s0x310a2120b2fb9241:0xc73fac7de9c31fac!8m2!3d10.6821021!4d105.0801341",
                        title: "🗾Bản đồ"
                        
                      },{
                        type: "element_share" 
                      }],
                    }, {
                        title: "Khu du lịch núi Sam",
                        subtitle: "Núi Sam hay còn gọi là Vĩnh Tế Sơn, là một quả núi có độ cao 284m ở Châu Đốc, An Giang",
                        item_url: "https://www.agtravellive.com/tintuc/timkiem/%7Btukhoa%7D?tukhoa=n%C3%BAi+sam",               
                        image_url: "http://mekongdeltaexplorer.com/wp-content/uploads/nui-sam-1.jpg",
                        buttons: [{
                          type: "web_url",
                          url: "https://www.agtravellive.com/tintuc/timkiem/%7Btukhoa%7D?tukhoa=n%C3%BAi+sam",
                          title: "📜Chi tiết"
                        },{
                          type: "web_url",
                          url: "https://www.google.com/maps/place/Trung+T%C3%A2m+Tm+Khu+Du+L%E1%BB%8Bch+N%C3%BAi+Sam/@10.6797736,105.0697011,15z/data=!4m8!1m2!2m1!1zS2h1IGtodSBs4buLY2ggbsO6aSBzYW0!3m4!1s0x310a212405e92fb7:0xe64c62eadc6426ba!8m2!3d10.6825696!4d105.0856286",
                          title: "🗾Bản đồ"                          
                        },{
                          type: "element_share" 
                        }],
                      },{
                        title: "Lâm Viên – núi Cấm (Châu Đốc)",
                        subtitle: "Núi Cấm được ví như Đà Lạt của miền Tây, không khí có phần nóng hơn một chút nhưng cảnh quan cũng tuyệt vời không kém",
                        item_url: "https://www.agtravellive.com/tintuc/timkiem/%7Btukhoa%7D?tukhoa=n%C3%BAi+c%E1%BA%A5m",               
                        image_url: "http://tourmientayvietnam.com/userfiles/image/nui%20cam%20an%20giang/du-lich-nui-cam-2.jpg",
                        buttons: [{
                          type: "web_url",
                          url: "https://www.agtravellive.com/tintuc/timkiem/%7Btukhoa%7D?tukhoa=n%C3%BAi+c%E1%BA%A5m",
                          title: "📜Chi tiết"
                        },{
                          type: "web_url",
                          url: "https://www.google.com/maps/place/N%C3%BAi+C%E1%BA%A5m/@10.4912262,104.9623052,13z/data=!3m1!4b1!4m5!3m4!1s0x3109f64e209ed487:0xaefb9c10fee9f6e6!8m2!3d10.5007455!4d104.9914601",
                          title: "🗾Bản đồ"
                          
                        },{
                          type: "element_share" 
                        }],
                      },{
                        title: "Tri Tôn – xứ sở của thốt nốt",
                        subtitle: "Huyện núi Tri Tôn giáp với biên giới Campuchia, cánh trung tâm hành chính...",
                        item_url: "https://www.agtravellive.com/tintuc/timkiem/%7Btukhoa%7D?tukhoa=Tri+t%C3%B4n",               
                        image_url: "https://znews-photo-td.zadn.vn/w660/Uploaded/mdf_eioxrd/2018_09_24/z3.jpg",
                        buttons: [{
                          type: "web_url",
                          url: "https://www.agtravellive.com/tintuc/timkiem/%7Btukhoa%7D?tukhoa=Tri+t%C3%B4n",
                          title: "📜Chi tiết"
                        },{
                          type: "web_url",
                          url: "https://www.google.com/maps/place/Tri+T%C3%B4n,+An+Giang,+Vi%E1%BB%87t+Nam/@10.4102643,104.8097979,11z/data=!3m1!4b1!4m5!3m4!1s0x3109fa1fe34fbaf5:0x9bd9e9341068db52!8m2!3d10.3972321!4d104.9856176",
                          title: "🗾Bản đồ"
                          
                        },{
                          type: "element_share" 
                        }],
                      },{
                        title: "Rừng Tràm Trà Sư",
                        subtitle: "Khi đã đến vùng miệt vườn sông nước An Giang thì rừng tràm Trà Sư là điểm đến nh...",
                        item_url: "https://www.agtravellive.com/tintuc/timkiem/%7Btukhoa%7D?tukhoa=R%E1%BB%ABng+tr%C3%A0m+tr%C3%A0+s%C6%B0",               
                        image_url: "https://www.chudu24.com/wp-content/uploads/2018/08/2-340.jpg",
                        buttons: [{
                          type: "web_url",
                          url: "https://www.agtravellive.com/tintuc/timkiem/%7Btukhoa%7D?tukhoa=R%E1%BB%ABng+tr%C3%A0m+tr%C3%A0+s%C6%B0",
                          title: "📜Chi tiết"
                        },{
                          type: "web_url",
                          url: "https://www.google.com/maps/place/R%E1%BB%ABng+Tr%C3%A0m+Tr%C3%A0+S%C6%B0/@10.5837193,105.0598097,17z/data=!3m1!4b1!4m5!3m4!1s0x310a1fccc2bc43b9:0xf03dafe8c807a960!8m2!3d10.583714!4d105.0619984",
                          title: "🗾Bản đồ"
                          
                        },{
                          type: "element_share" 
                        }],
                      }]
                  }
                }
              }
        }
    })
}
const sendQuickMessage = (senderID,name) => {//tn nhanh
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: { access_token: fb_access_token},
        method: 'POST',
        json: {
            recipient: { id: senderID},
            message:{
                text:"Mình đoán "+name+" đang quan tâm đến: ",
                quick_replies: [
                    {
                      content_type:"text",
                      title:"Giới thiệu",
                      payload:"DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_ACTION"
                    },
                    {
                        content_type:"text",
                        title:"Du lịch",
                        payload:"DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_ACTION"
                    },
                    {
                        content_type:"text",
                        title:"Ẩm thực",
                        payload:"DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_ACTION"
                    },
                    {
                        content_type:"text",
                        title:"Lưu trú",
                        payload:"DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_ACTION"
                    },                    
                    {
                        content_type:"location",
                    }
                  ]
            }
        }
    })
}

module.exports=(event)=>{
    const senderID=event.sender.id
    const fbUserText=event.message.text
    const fbUserAttachments=event.message.attachments
    console.log('SenderID: '+senderID)
    console.log('User Message Text: '+fbUserText)
    //console.log('User Message Attachments: '+fbUserAttachments)
    var senderName =''
    getSenderInformation((senderInfo)=>{
        senderName=senderInfo
    })
    //Bắt các trường hợp để sử dụng
    if(fbUserAttachments){
        var lat = null;
        var long = null;
        if(fbUserAttachments[0].payload.coordinates)
            {
                lat = fbUserAttachments[0].payload.coordinates.lat;
                long = fbUserAttachments[0].payload.coordinates.long;
            }
        var msg="Vị trí của bạn:\nKinh độ: "+long+"\nVĩ độ: "+lat;
        sendTextMessage(senderID,{"text":msg})
        
    }

    getWitAPIData((witData)=>{
        if(witData.entities.muc_dich){
            switch (witData.entities.muc_dich[0].value) {
                case "chào hỏi":
                    sendTextMessage(senderID,{"text":"Chào "+senderName+" ✌️, mình có thể giúp gì được cho bạn?"})
                    sendGifMessage(senderID)
                    setTimeout(function(){
                        sendQuickMessage(senderID,senderName)
                    },2000)
                    break;
                case "du lịch":
                    if(!witData.entities.diem_du_lich){
                        sendTextMessage(senderID,{"text":senderName+" muốn đi du lịch tại đâu ở An Giang?\nMột số điểm "+senderName+" có thể đến: "})
                        setTimeout(function(){
                        sendGenericMessage(senderID)
                        },1000)
                    }
                    else
                    {
                        //var str=witData.entities.diem_du_lich[0].value.charAt(0).toUpperCase()+witData.entities.diem_du_lich[0].value.slice(1)
                        sendTextMessage(senderID,{"text":"Núi Sam có nét đẹp linh thiêng, khiến bạn như mê đắm vào chốn thần tiên 💞"})
                        sendGenericMessageDetail(senderID);
                    }                                  
                    break;
                default:
                    break;
            }
        }
    })
    //Hàm gọi đến WIT_API
    function getWitAPIData(callback) {
        var client = new RestClient()
        var arguments = {           
            data: { userMessage: fbUserText }, // Gán tin nhắn người dùng
            headers: { "Content-Type": "application/json" } // Đảm bải post theo dạng json
        };
        client.post("http://localhost:4000/v1/getEntitiesInfo", arguments, function(data, response) {
            if (data.isSuccess == true) {
                callback(data.data)
            } else {
                callback(null)
            }
        })
    }


    function getSenderInformation(callback) {
        request({
            url: "https://graph.facebook.com/v2.6/" + event.sender.id,
            qs: {
                access_token: fb_access_token,
                fields: 'first_name'
            },
            method: 'GET'
        }, function(error, response, body) {
            if (!error) {
                var bodyObject = JSON.parse(body)
                callback(bodyObject.first_name)
            }
        })
    }
}