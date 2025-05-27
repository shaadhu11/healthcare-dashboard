import { FaLungs, FaTeeth, FaBone } from 'react-icons/fa';

const healthCards = [
  { title: 'Lungs', date: 'Oct 10, 2021', status: 'issue', statusText: 'Check Required' , icon:<FaLungs/>},
  { title: 'Teeth', date: 'Oct 12, 2021', status: 'ok', statusText: 'Healthy' , icon:<FaTeeth />
 },
  { title: 'Bone', date: 'Oct 14, 2021', status: 'good', statusText: 'Good Condition' , icon:<FaBone/>  },
];

export default healthCards;
