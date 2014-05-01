(function(Firebase){
    angular.module('polls').factory('chatService',function($rootScope) {
        var firebaseUrl = 'https://commonsensedog.firebaseio.com/poll-chat/';

        var dataRef = new Firebase(firebaseUrl);

        var chats = [];

        dataRef.on('child_added', function(snapshot){
            var newMessage = snapshot.val();

            chats.push(newMessage);

            $rootScope.safeApply(function(){
                $rootScope.$broadcast('chats', chats);
            });
        });

        var chatService = {
            getChats: function(){
                return chats;
            },
            sendMessage: function(from, message, date){
                date = date || new Date();
                dataRef.push({from: from, message: message, date: date});
            }
        };

        return chatService;
    });
})(window.Firebase);
