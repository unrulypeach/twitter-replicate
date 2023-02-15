export default function styleWrapper(OriginalComponent: React.FC): JSX.Element {
  return (
    <div className="flex flex-row text-center">
      <OriginalComponent />
    </div>
  );
}
