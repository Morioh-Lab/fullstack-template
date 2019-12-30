var mongoose = require('mongoose'),
    mongoosePaginate = require('mongoose-paginate-v2');
  

module.exports = mongoose.model('post', new mongoose.Schema({
    uid: mongoose.Schema.Types.ObjectId,
    
    // title
    tl: String,
    // description 
    desc: String,
    // content
    txt: String,
    // image
    img: String,   
    // tags
    t: [],   
    //views 
    v: { type: Number, default: 0 },
    // 0: draft, 1: public
    stt: { type: Number, default: 1 },

    crt: { type: Number, default: Date.now }
    
}, { collection: 'posts', versionKey: false }).plugin(mongoosePaginate));