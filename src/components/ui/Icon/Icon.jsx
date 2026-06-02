export default  function Icon({ name, size = 18, color = "currentColor", ...props }) {
    const icons = {
        today:     <><rect x="3" y="4" width="18" height="18" rx="3" stroke={color} strokeWidth="1.5" fill="none"/><line x1="3" y1="9" x2="21" y2="9" stroke={color} strokeWidth="1.5"/><line x1="8" y1="2" x2="8" y2="6" stroke={color} strokeWidth="1.5" strokeLinecap="round"/><line x1="16" y1="2" x2="16" y2="6" stroke={color} strokeWidth="1.5" strokeLinecap="round"/></>,
        planner:   <><rect x="3" y="3" width="18" height="18" rx="2" stroke={color} strokeWidth="1.5" fill="none"/><line x1="3" y1="9" x2="21" y2="9" stroke={color} strokeWidth="1.5"/><line x1="3" y1="15" x2="21" y2="15" stroke={color} strokeWidth="1.5"/><line x1="9" y1="9" x2="9" y2="21" stroke={color} strokeWidth="1.5"/></>,
        projects:  <><path d="M3 7h18M3 12h10M3 17h7" stroke={color} strokeWidth="1.5" strokeLinecap="round"/><circle cx="18" cy="15" r="4" stroke={color} strokeWidth="1.5" fill="none"/><path d="M18 13v2l1 1" stroke={color} strokeWidth="1.5" strokeLinecap="round"/></>,
        stats:     <><polyline points="3,17 9,11 13,15 21,7" stroke={color} strokeWidth="1.5" fill="none" strokeLinejoin="round"/><polyline points="17,7 21,7 21,11" stroke={color} strokeWidth="1.5" fill="none"/></>,
        settings:  <><circle cx="12" cy="12" r="3" stroke={color} strokeWidth="1.5" fill="none"/><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke={color} strokeWidth="1.5" strokeLinecap="round"/></>,
        plus:      <><line x1="12" y1="5" x2="12" y2="19" stroke={color} strokeWidth="1.5" strokeLinecap="round"/><line x1="5" y1="12" x2="19" y2="12" stroke={color} strokeWidth="1.5" strokeLinecap="round"/></>,
        check:     <polyline points="5,12 10,17 19,7" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>,
        chevron:   <polyline points="9,18 15,12 9,6" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round"/>,
        chevronD:  <polyline points="6,9 12,15 18,9" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round"/>,
        trash:     <><polyline points="3,6 5,6 21,6" stroke={color} strokeWidth="1.5" strokeLinecap="round"/><path d="M19 6l-1 14H6L5 6" stroke={color} strokeWidth="1.5" fill="none"/><path d="M10 11v6M14 11v6" stroke={color} strokeWidth="1.5" strokeLinecap="round"/></>,
        edit:      <><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke={color} strokeWidth="1.5" fill="none"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke={color} strokeWidth="1.5" fill="none"/></>,
        flag:      <><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" stroke={color} strokeWidth="1.5" fill="none"/><line x1="4" y1="22" x2="4" y2="15" stroke={color} strokeWidth="1.5" strokeLinecap="round"/></>,
        logo:    <><circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.5" fill="none"/><circle cx="12" cy="12" r="6" stroke={color} strokeWidth="1.5" fill="none"/><circle cx="12" cy="12" r="2" fill={color}/></>,
        star:      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" stroke={color} strokeWidth="1.5" fill="none"/>,
        fire:      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 17c1.5 0 2.5-1 2.5-1s1.5.5 1.5 2c0 2-2 3-4 3s-4-1-4-3c0-1.5 1.5-3.5 1.5-3.5zM12 2c0 0 1 3 1 6 0 1-.5 2-1.5 2.5C11 10 10 9 10 8c0-2 2-6 2-6z" stroke={color} strokeWidth="1.5" fill="none" strokeLinejoin="round"/>,
        close:     <><line x1="18" y1="6" x2="6" y2="18" stroke={color} strokeWidth="1.5" strokeLinecap="round"/><line x1="6" y1="6" x2="18" y2="18" stroke={color} strokeWidth="1.5" strokeLinecap="round"/></>,
        eye:       <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke={color} strokeWidth="1.5" fill="none"/><circle cx="12" cy="12" r="3" stroke={color} strokeWidth="1.5" fill="none"/></>,
        lock:      <><rect x="3" y="11" width="18" height="11" rx="2" stroke={color} strokeWidth="1.5" fill="none"/><path d="M7 11V7a5 5 0 0 1 10 0v4" stroke={color} strokeWidth="1.5" fill="none"/></>,
        user:      <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke={color} strokeWidth="1.5" fill="none"/><circle cx="12" cy="7" r="4" stroke={color} strokeWidth="1.5" fill="none"/></>,
        mail:      <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke={color} strokeWidth="1.5" fill="none"/><polyline points="22,6 12,13 2,6" stroke={color} strokeWidth="1.5" fill="none"/></>,
        kanban:    <><rect x="3" y="3" width="5" height="18" rx="1" stroke={color} strokeWidth="1.5" fill="none"/><rect x="10" y="3" width="5" height="12" rx="1" stroke={color} strokeWidth="1.5" fill="none"/><rect x="17" y="3" width="5" height="8" rx="1" stroke={color} strokeWidth="1.5" fill="none"/></>,
        list:      <><line x1="8" y1="6" x2="21" y2="6" stroke={color} strokeWidth="1.5" strokeLinecap="round"/><line x1="8" y1="12" x2="21" y2="12" stroke={color} strokeWidth="1.5" strokeLinecap="round"/><line x1="8" y1="18" x2="21" y2="18" stroke={color} strokeWidth="1.5" strokeLinecap="round"/><circle cx="4" cy="6" r="1" fill={color}/><circle cx="4" cy="12" r="1" fill={color}/><circle cx="4" cy="18" r="1" fill={color}/></>,
    };

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" {...props}>
            {icons[name] || null}
        </svg>
    )
}