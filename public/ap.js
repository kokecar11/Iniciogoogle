var providerg = new firebase.auth.GoogleAuthProvider();
var providerFacebook = new firebase.auth.FacebookAuthProvider();

function guardarDatos(user){
    var usuario = {
        uid     :user.uid,
        nombre  :user.displayName,
        email   :user.email,
        foto    :user.photoURL
    }

    firebase.database().ref('usuarios/'+user.uid).set(usuario);
}

$('#loging').click(function(){
    firebase.auth().signInWithPopup(providerg)
        .then(function(result){
            console.log(result.user);
            $('#loging').hide();
            guardarDatos(result.user);
            $('#root').append(result.user.displayName);
            $('#avatar').attr('src',result.user.photoURL);

        });


});


$('#loginf').click(function(){
    firebase.auth().signInWithPopup(providerFacebook)
        .then(function(result){
            console.log(result.user);
            $('#loginf').hide();
            guardarDatos(result.user);
            $('#root').append(result.user.displayName);
            $('#avatar').attr('src',result.user.photoURL);

        });


});


