import fetch from 'node-fetch';
import { createWriteStream } from 'fs';
import { join } from 'path';

interface Icon {
  name: string;
  icons: { url: string; format: string }[];
}

async function downloadIcons() {
  const icons: Icon[] = await fetch('https://chainid.network/chain_icons.json').then((response) =>
    response.json()
  );

  await Promise.all(
    icons.map(async (icon) => {
      const iconFile = icon.icons?.[0];
      if (iconFile) {
        const cid = iconFile.url.slice(7);
        const response = await fetch(`https://chainid.network/iconsDownload/${cid}`);
        const fileStream = createWriteStream(join(__dirname, `${icon.name}.${iconFile.format}`));
        await new Promise((resolve, reject) => {
          response.body.pipe(fileStream);
          response.body.on('error', reject);
          fileStream.on('finish', resolve);
        });
      }
    })
  );
}

downloadIcons().catch(console.error);
