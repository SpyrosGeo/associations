var mongoose = require ("mongoose");
mongoose.connect("mongodb://localhost/blog_demo",{useNewUrlParser: true});
//USER-Email name

var postSchema = new mongoose.Schema({
  title:String,
  content:String
});
var Post = mongoose.model("Post",postSchema);


var userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts:[postSchema]
});

var User = mongoose.model("User",userSchema);

// var newUser = new User({
//   email:"happy@sadmail.com",
//   name: "Happy Sadson"
// });
// newUser.posts.push({
//   title:"this post sucks",
//   content:"well this a test what were u expecting?"
// });
// newUser.save(function(err,user) {
//   if (err) {
//     console.log('err:', err);
//   } else {
//     console.log('user:', user);
//   }
// });
// var newPost = new Post({
//   title:"Sad Times friends",
//   content:"Today my cat prigles told me he is a furry but not a  cat ... a dog"
// });
// newPost.save(function(err,post) {
//   if (err) {
//     console.log('err:', err);
//   } else {
//     console.log('post:', post);
//   }
// });
User.findOne({name:"Happy Sadson"},function(err,user) {
  if (err) {
    console.log('err:', err);
  } else {
    user.posts.push({
      title:"well im sad again",
      content: "what? im sad....being sad aint easy"
    });
    user.save(function(err,user) {
      if (err) {
        console.log('err:', err);
      } else {
        console.log('user:', user);
      }
    })
  }
});
