import Button from './Button';
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

function App() {
  return (
    <div>
      <div>
        <Button secondary outline rounded>
            <GoBell />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline>
            <GoCloudDownload />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>
        <GoDatabase />

            See Deal!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default App;
