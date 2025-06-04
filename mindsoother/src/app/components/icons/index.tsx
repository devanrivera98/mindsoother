'use client'
import { LuBrain as LuBrainRaw } from 'react-icons/lu';
import { LuHouse as LuHouseRaw } from "react-icons/lu";
import { LuBookmark as LuBookmarkRaw} from "react-icons/lu";
import { IoIosInformationCircleOutline as IoIosInformationCircleOutlineRaw } from "react-icons/io";
import { RxHamburgerMenu as RxHamburgerMenuRaw } from "react-icons/rx";

const LuBrain = (props: React.ComponentProps<'svg'>) => LuBrainRaw({...props});
const LuHouse = (props: React.ComponentProps<'svg'>) => <>{LuHouseRaw({...props})}</>;
const LuBookmark = (props: React.ComponentProps<'svg'>) => <>{LuBookmarkRaw({...props})}</>;
const InformationCircle = (props: React.ComponentProps<'svg'>) => <>{IoIosInformationCircleOutlineRaw({...props})}</>;
const RxHamburgerMenu = (props: React.ComponentProps<'svg'>) => <>{RxHamburgerMenuRaw({...props})}</> ;