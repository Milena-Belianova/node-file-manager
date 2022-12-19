import os from 'os';

const osOperations = ['--EOL', '--cpus', '--homedir', '--username', '--architecture'];

export const printOsInfo = async (operation) => {
  try {
    if (osOperations.includes(operation)) {
      const slicedOperation = operation.slice(2);

      switch (slicedOperation) {
        case 'EOL':
          console.log(JSON.stringify(os.EOL));
          break;
        case 'cpus':
          console.log(os.cpus().map(({ model, speed }) => ({
            model,
            speed: `${speed / 1000}GHz`
          })));
          break;
        case 'homedir':
          console.log(os.homedir());
          break;
        case 'username':
          console.log(os.userInfo().username);
          break;
        case 'architecture':
          console.log(os.arch());
          break;
      }
    } else {
      throw new Error;
    }
  } catch (err) {
    console.warn('Invalid input');
  }
};

// os --EOL
// os --cpus
// os --homedir
// os --username
// os --architecture
