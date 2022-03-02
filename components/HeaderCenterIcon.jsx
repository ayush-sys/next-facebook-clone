export default function HeaderCenterIcon({ Icon, active }) {
    return (
    <div className="header-center-div group">
        <Icon className={`header-center-icon group-hover:text-blue-500 ${active && 'text-blue-500'}`}/>
    </div>
    );
}