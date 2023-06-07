import { useNavigate } from "react-router-dom";
import { loginApi } from "@/api/user/login";
import { message } from "antd";
import { useTimes } from "@/hooks/component/useTime";
import { useEffect, useState } from "react";
const Login = () => {
	const navigate = useNavigate();
	const { time } = useTimes();
	const [count, setCount] = useState(0);
	// 登录
	const onFinish = async () => {
		await loginApi({
			username: "string",
			password: "string"
		});
		message.success("登录成功！");
		navigate("/home/index");
	};
	const onCk = () => {
		setCount(count + 1);
	};
	useEffect(() => {
		console.log(123);
		document.title = `You clicked ${count} times`;
	}, [count]);
	return (
		<div className="login">
			<div onClick={onCk}>{time}</div>
			<div onClick={onFinish}>登录</div>
		</div>
	);
};

export default Login;
