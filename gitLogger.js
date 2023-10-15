import { exec } from 'child_process';
import util from 'node:util';




const ex = util.promisify(exec);

ex(`git log --oneline`);