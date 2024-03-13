import React from 'react';
import Image from 'next/image';
import { BiMessageRounded } from 'react-icons/bi';
import { FaRetweet } from 'react-icons/fa';
import { IoMdHeartEmpty } from 'react-icons/io';
import { BiUpload } from 'react-icons/bi';

const FeedCard: React.FC = () => {
  return (
    <div  className="border border-r-0 border-l-0 border-b-0 border-gray-600 p-4 hover:bg-slate-700 transition-all text-white">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-4">
          <Image src="/path/to/your/image.jpg" alt="user-image" height={50} width={50} />
        </div>
        <div className="col-span-8 text-white"> {/* Changed col-span-11 to col-span-8 and added text-white class */}
          <h1 className="text-white" >Yashant Thakur</h1> {/* Added text-white class */}
          <p className="text-white"> {/* Added text-white class */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolor amet quas ipsam rem ratione, pariatur nobis accusantium unde possimus, itaque commodi fugit. Ex vero dolorum suscipit optio, tempora voluptate?
          </p>
          <div className="flex justify-between mt-5 text-xl items-center p-2 w-[90%]"> {/* Changed item-center to items-center */}
            <div><BiMessageRounded /></div>
            <div><FaRetweet /></div>
            <div><IoMdHeartEmpty /></div>
            <div><BiUpload /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
