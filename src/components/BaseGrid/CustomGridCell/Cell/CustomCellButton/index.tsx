"use client";

import { BUTTON_MODE } from "../../model";
import BaseRow from "../../../../BaseRow";

import DivPermission from "../../../../BaseDivPermission";
import {
	Page,
	MultiplePagesXmark,
	LogNoAccess,
	Coins,
	DollarCircle,
	ClockRotateRight,
	DatabaseScriptPlus,
} from "iconoir-react";

import "./style.scss";
import BaseIcon from "../../../../BaseIcon";
interface Props {
	id?: string;
	mode: BUTTON_MODE;
	viewFunction?: () => void;
	editFunction?: () => void;
	deleteFunction?: () => void;
	printFunction?: () => void;
	orderFunction?: () => void;
	downloadFunction?: () => void;
	uploadFunction?: () => void;
	addFunction?: () => void;
	searchFunction?: () => void;
	onClick?: () => void;
	disabled?: boolean;
	isStoryBook?: boolean;
	noBaseRow?: boolean;
}

const CustomCellButton = ({
	id,
	mode,
	viewFunction = () => {},
	editFunction = () => {},
	deleteFunction = () => {},
	disabled = false,
	printFunction = () => {},
	orderFunction = () => {},
	downloadFunction = () => {},
	uploadFunction = () => {},
	addFunction = () => {},
	searchFunction = () => {},
	onClick = () => {},
	isStoryBook = false,
	noBaseRow = false,
}: Props) => {
	let content;

	switch (mode) {
		case BUTTON_MODE.EDIT_ONLY_ICON:
			content = (
				<BaseIcon
					name="edit"
					className={disabled ? "disabled" : "custom-cell-button-icon edit"}
					onClick={editFunction}
				/>
			);
			break;

		case BUTTON_MODE.DELETE_ONLY_ICON:
			content = isStoryBook ? (
				//show ใน storyBook
				<BaseIcon
					name="delete"
					className={disabled ? "disabled" : "custom-cell-button-icon delete"}
					{...(id && { id: `${id}-delete` })}
					onClick={deleteFunction}
				/>
			) : (
				<DivPermission pageLevel="delete">
					<BaseIcon
						name="delete"
						className={disabled ? "disabled" : "custom-cell-button-icon delete"}
						{...(id && { id: `${id}-delete` })}
						onClick={deleteFunction}
					/>
				</DivPermission>
			);
			break;

		case BUTTON_MODE.VIEW_ONLY_ICON:
			content = isStoryBook ? (
				<Page
					{...(id && { id: `${id}-view` })}
					onClick={viewFunction}
					className={disabled ? "disabled" : "custom-cell-button-icon view"}
				/>
			) : (
				<DivPermission pageLevel="view">
					<Page
						{...(id && { id: `${id}-view` })}
						onClick={viewFunction}
						className={disabled ? "disabled" : "custom-cell-button-icon view"}
					/>
				</DivPermission>
			);
			break;

		case BUTTON_MODE.EDIT_DELETE_ICON:
			content = (
				<>
					<BaseIcon
						name="edit"
						className={disabled ? "disabled" : "custom-cell-button-icon edit"}
						onClick={editFunction}
					/>
					{isStoryBook ? (
						<BaseIcon
							name="delete"
							className={
								disabled ? "disabled" : "custom-cell-button-icon delete"
							}
							{...(id && { id: `${id}-delete` })}
							onClick={deleteFunction}
						/>
					) : (
						<DivPermission pageLevel="delete">
							<BaseIcon
								name="delete"
								className={
									disabled ? "disabled" : "custom-cell-button-icon delete"
								}
								{...(id && { id: `${id}-delete` })}
								onClick={deleteFunction}
							/>
						</DivPermission>
					)}
				</>
			);
			break;

		case BUTTON_MODE.PRINTER_ICON:
			content = (
				<BaseIcon
					name="printer"
					className={disabled ? "disabled" : "custom-cell-button-icon printer"}
					{...(id && { id: `${id}-printer` })}
					onClick={printFunction}
				/>
			);
			break;

		case BUTTON_MODE.ORDER_ICON:
			content = (
				<BaseIcon
					name="order"
					className={disabled ? "disabled" : "custom-cell-button-icon order"}
					{...(id && { id: `${id}-order` })}
					onClick={orderFunction}
				/>
			);
			break;

		case BUTTON_MODE.DOWNLOAD_ICON:
			content = (
				<BaseIcon
					name="download"
					className={disabled ? "disabled" : "custom-cell-button-icon download"}
					{...(id && { id: `${id}-download` })}
					onClick={downloadFunction}
				/>
			);
			break;
		case BUTTON_MODE.DOWNLOAD_DELETE_ICON:
			content = (
				<>
					<BaseIcon
						name="download"
						className={
							disabled ? "disabled" : "custom-cell-button-icon download"
						}
						{...(id && { id: `${id}-download` })}
						onClick={downloadFunction}
					/>
					{isStoryBook ? (
						<BaseIcon
							name="delete"
							className={
								disabled ? "disabled" : "custom-cell-button-icon delete"
							}
							{...(id && { id: `${id}-delete` })}
							onClick={deleteFunction}
						/>
					) : (
						<DivPermission pageLevel="delete">
							<BaseIcon
								name="delete"
								className={
									disabled ? "disabled" : "custom-cell-button-icon delete"
								}
								{...(id && { id: `${id}-delete` })}
								onClick={deleteFunction}
							/>
						</DivPermission>
					)}
				</>
			);
			break;

		case BUTTON_MODE.UPLOAD_ICON:
			content = (
				<BaseIcon
					name="upload"
					className={disabled ? "disabled" : "custom-cell-button-icon upload"}
					{...(id && { id: `${id}-upload` })}
					onClick={uploadFunction}
				/>
			);
			break;

		case BUTTON_MODE.ADD_ICON:
			content = (
				<BaseIcon
					name="add"
					className={disabled ? "disabled" : "custom-cell-button-icon add"}
					{...(id && { id: `${id}-add` })}
					onClick={addFunction}
				/>
			);
			break;

		case BUTTON_MODE.SEARCH_ICON:
			content = (
				<BaseIcon
					name="search"
					className={disabled ? "disabled" : "custom-cell-button-icon search"}
					{...(id && { id: `${id}-search` })}
					onClick={searchFunction}
				/>
			);
			break;

		case BUTTON_MODE.DOWNLOAD_EXCEL_FAIL_ICON:
			content = isStoryBook ? (
				<MultiplePagesXmark
					{...(id && { id: `${id}-view` })}
					onClick={downloadFunction}
					className={disabled ? "disabled" : "custom-cell-button-icon delete"}
				/>
			) : (
				<DivPermission pageLevel="view">
					<MultiplePagesXmark
						{...(id && { id: `${id}-view` })}
						onClick={downloadFunction}
						className={disabled ? "disabled" : "custom-cell-button-icon delete"}
					/>
				</DivPermission>
			);
			break;

		case BUTTON_MODE.CANCEL_CHECK_ICON:
			content = (
				<BaseIcon
					name="cancelCheck"
					className={
						disabled ? "disabled" : "custom-cell-button-icon cancel-check"
					}
					{...(id && { id: `${id}-cancel-check` })}
					onClick={onClick}
				/>
			);
			break;

		case BUTTON_MODE.SEND_DOLLARS_ICON:
			content = (
				<BaseIcon
					name="sendDollars"
					className={
						disabled ? "disabled" : "custom-cell-button-icon send-dollars"
					}
					{...(id && { id: `${id}-send-dollars` })}
					onClick={onClick}
				/>
			);
			break;

		case BUTTON_MODE.SUCCESS_ICON:
			content = (
				<BaseIcon
					name="successIcon"
					className={
						disabled ? "disabled" : "custom-cell-button-icon success-icon"
					}
					{...(id && { id: `${id}-success-icon` })}
					onClick={onClick}
				/>
			);
			break;

		case BUTTON_MODE.LOG_NO_ACCESS_ICON:
			content = (
				<LogNoAccess
					{...(id && { id: `${id}-log-no-access-icon` })}
					onClick={onClick}
					className={
						disabled ? "disabled" : "custom-cell-button-icon log-no-access-icon"
					}
				/>
			);
			break;
		case BUTTON_MODE.COIN_ICON:
			content = (
				<Coins
					{...(id && { id: `${id}-coin-icon` })}
					onClick={onClick}
					className={
						disabled ? "disabled" : "custom-cell-button-icon coin-icon"
					}
				/>
			);
			break;

		case BUTTON_MODE.DATA_TRANSFER_BOTH_ICON:
			content = (
				<BaseIcon
					name="dataTransferBothIcon"
					className={
						disabled
							? "disabled"
							: "custom-cell-button-icon data-transfer-both-icon"
					}
					{...(id && { id: `${id}-data-transfer-both-icon` })}
					onClick={onClick}
				/>
			);
			break;

		case BUTTON_MODE.DOLLAR_CIRCLE_ICON:
			content = (
				<DollarCircle
					{...(id && { id: `${id}-dollar_circle_icon` })}
					onClick={onClick}
					className={
						disabled ? "disabled" : "custom-cell-button-icon dollar_circle_icon"
					}
				/>
			);
			break;

		case BUTTON_MODE.CLOCK_ROTATE_RIGHT:
			content = (
				<ClockRotateRight
					{...(id && { id: `${id}-clock_rotate_right_icon` })}
					onClick={onClick}
					className={
						disabled
							? "disabled"
							: "custom-cell-button-icon clock_rotate_right_icon"
					}
				/>
			);
			break;

		case BUTTON_MODE.DATABASE_SCRIPT_PLUS:
			content = (
				<DatabaseScriptPlus
					{...(id && { id: `${id}-database_script_plus_icon` })}
					onClick={onClick}
					className={
						disabled
							? "disabled"
							: "custom-cell-button-icon database_script_plus_icon"
					}
				/>
			);
			break;

		default:
			return null;
	}

	return (
		<>
			{noBaseRow ? (
				<div>{content}</div>
			) : (
				<BaseRow className="items-center space-x-1">{content}</BaseRow>
			)}
		</>
	);
};

export default CustomCellButton;
