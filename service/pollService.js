(function(Firebase){
    angular.module('polls').factory('pollService',function($rootScope) {
        var dataRef;
        var firebaseUrl = 'https://commonsensedog.firebaseio.com/polls/';
        var polls = [];

        if (Firebase){
            dataRef = new Firebase(firebaseUrl);

            dataRef.on('value', function(snapshot){
                var pollObject = snapshot.val() || {};
                var pairs = _.pairs(pollObject);
                polls = _.map(pairs, function(kvp) {
                    var key=  kvp[0];
                    var poll = kvp[1];
                    poll.pollId = key;
                    return poll;
                });

                $rootScope.safeApply(function(){
                    $rootScope.$broadcast('polls', polls);
                });
            });
        }
    var pollService = {
      getPolls: function(){
       return polls;
    },
    savePollResult: function(pollId, answerIndex){
        var pollDataRef = new Firebase(firebaseUrl + pollId);
        var poll = _.find(polls, function(p) { return p.pollId === pollId; });
        if (poll && answerIndex >= 0){
            poll.answers[answerIndex].numberOfAnswers++;
        }

        pollDataRef.set(JSON.parse(angular.toJson(poll)));
    },
    savePoll: function(poll){
        var pollIds = _.map(polls, function(p){ return p.pollId;}) || [0];
        if (poll.pollId){
            var pollDataRef = new Firebase(firebaseUrl + poll.pollId);
            pollDataRef.set(JSON.parse(angular.toJson(poll)));
        }else{
            if (dataRef){
                dataRef.push(JSON.parse(angular.toJson(poll)));
            }
        }
    }
    };

    return pollService;
    });
})(window.Firebase);
