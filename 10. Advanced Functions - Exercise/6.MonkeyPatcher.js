function result(vote){
    switch(vote){
        case 'upvote':
            this.upvotes++;
            break;
        case 'downvote':
            this.downvotes++;
            break;
        case 'score':
            let total = this.upvotes + this.downvotes;
            let obfuscated = Math.ceil(0.25 * Math.max(this.upvotes,this.downvotes));
            let obfuscatedUpVotes = this.upvotes + obfuscated;
            let obfuscatedDownVotes = this.downvotes + obfuscated;
            let balance = obfuscatedUpVotes - obfuscatedDownVotes;

            let rating = '';
 
            if (total < 10) {
              rating = 'new';
            } else if (this.upvotes > total * 0.66) {
              rating = 'hot';
            } else if (balance >= 0 && (this.upvotes > 100 || this.downvotes > 100)) {
              rating = 'controversial';
            } else if (balance < 0) {
              rating = 'unpopular';
            } else {
              rating = 'new';
            }
             if (total > 50) {
                 return [obfuscatedUpVotes, obfuscatedDownVotes, balance, rating];
            }
            return [this.upvotes, this.downvotes, balance, rating];
        }
}
var forumPost = {
    id: '1',
    author: 'pesho',
    content: 'hi guys',
    upvotes: 0,
    downvotes: 0
};

result.call(forumPost, 'upvote');
var answer = result.call(forumPost, 'score');
/*let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
solution.call(post, 'downvote'); // (executed 50 times)
score = solution.call(post, 'score'); // [139, 189, -50, 'unpopular']*/
  /*let addedNumber = 0;
            let difference = this.upvotes - this.downvotes;
            let rating = '';
            if(this.upvotes > this.downvotes){
                addedNumber += Math.ceil(this.upvotes / 4);
            }else{
                addedNumber += Math.ceil(this.downvotes / 4);
            }
            if(difference > 0 && difference > Math.ceil(0.66 * (this.upvotes + this.downvotes))){
                rating = 'hot';
            }else if(difference >= 0 && (this.upvotes + this.downvotes) > 100){
                rating = 'controversial';
            }else if(difference < 0){
                rating = 'unpopular';
            }
            return [this.upvotes + addedNumber, this.downvotes + addedNumber, difference, rating];
    }*/