import GuideTemplate from '../../../components/technical-guide/GuideTemplate';

export default function Page({params}:{params:{slug:string}}){
 return <GuideTemplate slug={params.slug}/>;
}