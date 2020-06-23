import {Problem } from '../problem/problem.class';

export const problems: Problem[] = [
  {
    id: 0,
    value: 'I did something terribly wrong, please tell me git has a magic time machine!?!',
    solution : 'git reflog \n' +
    '<span class="comment"># you will see a list of every thing you\'ve \n' +
    '# done in git, across all branches! \n' +
    '# each one has an index HEAD@{index} \n' +
    '# find the one before you broke everything \n</span>' +
    'git reset HEAD@{index}'
  },
  {
    id: 1,
    value: 'I committed and immediately realized I need to make one small change!',
    solution : '<span class="comment"># make your change \n</span>' +
    'git add . ' +
    '<span class="comment"># or add individual files \n</span>' +
    'git commit --amend --no-edit ' +
    '<span class="comment"># now your last commit contains that change! \n' +
    '# WARNING: never amend public commits</span>'
  },
  {
    id: 2,
    value: 'I need to change the message on my last commit!',
    solution : 'git commit --amend \n' +
    '<span class="comment"># follow prompts to change the commit message </span>'
  },
  {
    id: 3,
    value: 'I accidentally committed something to master that should have been on a brand new branch!',
    solution : '<span class="comment"># create a new branch from the current state of master</span>\n' +
    'git branch some-new-branch-name \n' +
    '<span class="comment"># remove the last commit from the master branch </span>\n' +
    'git reset HEAD~ --hard \n' +
    'git checkout some-new-branch-name'
  },
  {
    id: 4,
    value: ' I accidentally committed to the wrong branch!',
    solution : '<span class="comment"># undo the last commit, but leave the changes available</span>\n' +
    'git reset HEAD~ --soft \n'+
    'git stash \n' +
    '<span class="comment"># move to the correct branch</span> \n' +
    'git checkout name-of-the-correct-branch \n'+
    'git stash pop \n' +
    'git add . <span class="comment" # or add individual files></span>\n' +
    'git commit -m "your message here";\n'+
    '<span class="comment"># now your changes are on the correct branch</span>'
  },
  {
    id: 5,
    value: 'I tried to run a diff but nothing happened?!',
    solution : 'git diff --staged'
  },
  {
    id: 6,
    value: 'I need to undo a commit from like 5 commits ago!',
    solution : '<span class="comment"># find the commit you need to undo</span>\n' +
    'git log \n' +
    '<span class="comment"># use the arrow keys to scroll up and down in history \n' +
    '# once you\'ve found your commit, save the hash</span> \n' +
    'git revert [saved hash] \n' +
    '<span class="comment"># git will create a new commit that undoes that commit \n' +
    '# follow prompts to edit the commit message \n' +
    '# or just save and commit </span>'
  },
  {
    id: 7,
    value: 'I need to undo my changes to a file!',
    solution : '<span class="comment"># find a hash for a commit before the file was changed</span> \n' +
    'git log \n' +
    '<span class="comment"># use the arrow keys to scroll up and down in history \n' +
    '# once you\'ve found your commit, save the hash </span>\n' +
    'git checkout [saved hash] -- path/to/file \n' +
    '<span class="comment"># the old version of the file will be in your index </span>\n' +
    'git commit -m \"Wow, you don\'t have to copy-paste to undo\"'
  },
  {
    id: 8,
    value: 'I need to undo my changes to a file!',
    solution : 'git reflog'
  }
];
