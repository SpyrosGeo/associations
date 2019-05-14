var mongoose = require ("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2",{useNewUrlParser: true});
//USER-Email name


var Post = require("./models/post");
var User = require("./models/user");




// Post.create({
//   title:"how to cook the best Burger pt. 4",
//   content:"you cant!!!!!!!!"
// },function(err,post) {
// User.findOne({email:"bob@gmail.com"},function(err,foundUser) {
//     if (err) {
//       console.log('error:', error);
//     }else {
//     foundUser.posts.push(post);
//     foundUser.save(function (err,data) {
//       if (err) {
//         console.log('err:', err);
//       } else {
//         console.log(data);
//       }
//     });
//     }
//   });
// });
// User.findOne({email:"bob@gmail.com"}).populate("posts").exec(function (err,user) {
//   if (err) {
//     console.log('err', err);
//   } else {
//     console.log('user:', user);
//   }
// });
