import {Problem } from '../problem/problem.class';

export const problems : Problem[] = [
  {
    id: 1,
    value: 'I did something terribly wrong, please tell me git has a magic time machine!?!',
    solution : 'git reflog \n\n git reset HEAD@{index}'
  },
  {
    id: 2,
    value: 'I committed and immediately realized I need to make one small change!',
    solution : 'git reflog'

  },
  {
    id: 3,
    value: 'I need to change the message on my last commit!',
    solution : 'git reflog'
  },
  {
    id: 4,
    value: ' accidentally committed something to master that should have been on a brand new branch!',
    solution : 'git reflog'
  },
  {
    id: 5,
    value: 'I accidentally committed to the wrong branch!',
    solution : 'git reflog'
  },
  {
    id: 6,
    value: 'I tried to run a diff but nothing happened?!',
    solution : 'git reflog'
  },
  {
    id: 7,
    value: 'I need to undo a commit from like 5 commits ago!',
    solution : 'git reflog'
  },
  {
    id: 8,
    value: 'I need to undo my changes to a file!',
    solution : 'git reflog'
  },
  {
    id: 9,
    value: 'I need to undo my changes to a file!',
    solution : 'git reflog'
  }
];
