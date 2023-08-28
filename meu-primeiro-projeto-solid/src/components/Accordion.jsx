import { VsArrowDown } from 'solid-icons/vs'
import { RiArrowsArrowRightSLine } from 'solid-icons/ri'
import { createSignal } from 'solid-js';
import './accordionStyle.css'

function AccordionItem({title, content}) {
  const [isOpen, setIsOpen] = createSignal(false)
  return(
    <div class="acc-item">
      <div class="acc-header" onClick={() => setIsOpen(!isOpen())}>
        {title}
        <span>
          {isOpen() ?
            <VsArrowDown/>
            :
            <RiArrowsArrowRightSLine/>
        }
        </span>
      </div>
      {isOpen() &&(
        <div class="acc-content">
            {content}
        </div>
      )}
    </div>
  )
}

export function Accordion({items}) {
  return(
    <div class="accordion">
      {items.map((item, index) => (
        <AccordionItem 
          key={index} 
          title={item.title} 
          content={item.content} 
        />
      ))}
    </div>
  )
}

