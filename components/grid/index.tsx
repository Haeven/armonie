import clsx from 'clsx';

function Grid(props: React.ComponentProps<'div'>) {
  return (
    <div className='flex'>
      {props.children}
    </div>
  );
}

function GridItem(props: React.ComponentProps<'div'>) {
  return (
    <div
      {...props}
      className={clsx(
        'relative flex-1 aspect-square h-full w-full overflow-hidden transition-opacity',
        props.className
      )}
    >
      {props.children}
    </div>
  );
}

Grid.Item = GridItem;
export default Grid;
