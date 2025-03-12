import React, { useState, useRef, useEffect } from "react";
import "./styles.css";

const Dropdown = ({ label, items, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleItemClick = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
    if (onSelect) onSelect(value);
  };

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)} className="dropdown-btn">
        {selectedValue || label}
      </button>
      
      {isOpen && (
        <div>
        
               <div className="dropdown-items">
            
            {items.map((item, index) => (
              <div
                key={index}
                className="dropdown-item"
                onClick={() => handleItemClick(item)}
              >
                {item}
              </div>
            ))}
          </div>
      </div>
      )}
    </div>
  );
};

export default Dropdown;
