import { memo } from 'react';
import PackagesSection from '../components/Steps';

const Page = () => {
  return (
    <div className="Page">
    <PackagesSection/>
    </div>
  );
};

export default memo(Page);