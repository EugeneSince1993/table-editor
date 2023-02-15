import { FC } from "react";

interface IHeaderProps {
}

export const Header: FC<IHeaderProps> = ({
}) => {

  return (
    <div className="table__header table-header">
      <div className="table-header__name">
        Название
      </div>
      <div className="table-header__value">
        Значение
      </div>
    </div>
  );
};
