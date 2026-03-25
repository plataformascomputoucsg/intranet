import { FacebookIcon } from '../icons/FacebookIcon';
import { InstagramIcon } from '../icons/InstagramIcon';
import { LinkedinIcon } from '../icons/LinkedinIcon';
import { TwitterIcon } from '../icons/TwitterIcon';
import { EmailIcon } from '../icons/EmailIcon';
import { LanguageIcon } from '../icons/LanguageIcon';
import { GiftIcon } from '../icons/GiftIcon';
import React from 'react';
import Link from 'next/link';

const TopBar: React.FC = () => {
  return (
    <>
      <div className="bg-ucsg-primary flex h-16 w-full justify-end">
        <div
          className="inline-flex h-20 w-[612px] items-center justify-center gap-8 bg-neutral-900"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 30px 100%)' }}
        >
          <div className="inline-flex items-start justify-start gap-8">
            <Link href="https://www.facebook.com/UCSGye" target="_blank" rel="noopener noreferrer">
              <FacebookIcon className="h-8 w-8 text-white" />
            </Link>
            <Link
              href="https://www.instagram.com/ucsgye/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="h-8 w-8 text-white" />
            </Link>
            <Link
              href="https://www.linkedin.com/school/universidad-catolica-de-santiago-de-guayaquil/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon className="h-8 w-8 text-white" />
            </Link>
            <Link href="https://x.com/ucatolicagye" target="_blank" rel="noopener noreferrer">
              <TwitterIcon className="h-8 w-8 text-white" />
            </Link>
          </div>
          <div className="inline-flex h-12 w-[3px] bg-white" />
          <div className="inline-flex items-start justify-start gap-8">
            <Link href="mailto:ucsg@ucsg.edu.ec">
              <EmailIcon className="h-8 w-8 text-white" />
            </Link>
            <Link href="https://www.ucsg.edu.ec" target="_blank" rel="noopener noreferrer">
              <LanguageIcon className="h-8 w-8 text-white" />
            </Link>
            <Link href="/cumpleanios">
              <GiftIcon className="h-8 w-8 text-white" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
