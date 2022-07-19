import React from "react";
import {
	MdOutlineSpaceDashboard,
	MdCategory,
	MdProductionQuantityLimits,
} from "react-icons/md";
import { AiOutlineUserAdd, AiFillGift } from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import * as Pages from "../Pages";

export const sidebarData = [
	// {
	// 	key: "dashboard",
	// 	name: "Dashboard",
	// 	icon: <MdOutlineSpaceDashboard />,
	// 	path: "/dashboard",
	// 	component: <Pages.Dashboard />,
	// 	subMenu: false,
	// },
	{
		key: "userList",
		name: "User's List",
		icon: <AiOutlineUserAdd />,
		path: "/userList",
		component: <Pages.UserList />,
		subMenu: false,
	},
	{
		key: "category",
		name: "Category",
		path: "category",
		icon: <MdCategory />,
		subMenu: true,
		subMenuData: [
			{
				key: "addCategory",
				name: "Add Category",
				path: "/addCategory",
				component: <Pages.AddCategory />,
			},
			{
				key: "listCategory",
				name: "List Category",
				path: "/listCategory",
				component: <Pages.ListCategory />,
			},
		],
	},
	{
		key: "subCategory",
		name: "Sub Category",
		icon: <BiCategoryAlt />,
		path: "subCategory",
		subMenu: true,
		subMenuData: [
			{
				key: "addSubCategory",
				name: "Add Sub Category",
				path: "/addSubCategory",
				component: <Pages.AddSubCategory />,
			},
			{
				key: "listSubCategory",
				name: "List Sub Category",
				path: "/listSubCategory",
				component: <Pages.ListSubCategory />,
			},
		],
	},
	{
		key: "product",
		name: "Product",
		icon: <AiFillGift />,
		path: "product",
		subMenu: true,
		subMenuData: [
			{
				key: "addProduct",
				name: "Add Product",
				path: "/addProduct",
				component: <Pages.AddProduct />,
			},
			{
				key: "listProduct",
				name: "List Product",
				path: "/listProduct",
				component: <Pages.ListProduct />,
			},
		],
	},
	{
		key: "cart",
		name: "Order",
		icon: <MdProductionQuantityLimits />,
		subMenu: false,
		path: "/order",
		component: <Pages.Cart />,
	},
];
